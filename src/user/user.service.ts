import { Injectable } from '@nestjs/common';
// import { Request } from 'express';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
// import * as uuid from 'uuid';
import { User } from './entities/user.entity';
import {
  CreateUserInput,
  UpdateUserInput,
  LoginUserInput,
  LoginResponse,
} from '../graphql';
import { AuthenticationError } from 'apollo-server-core';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  async findAll(offset: number, limit: number): Promise<User[]> {
    return await this.userRepository.find({
      order: { createdAt: 'DESC' },
      skip: offset,
      take: limit,
      cache: true,
    });
  }

  async findById(_id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        _id: _id,
      },
    });
  }

  async create(input: CreateUserInput): Promise<User> {
    const { username, password, name, email } = input;
    const message = 'Email has already been taken.';

    const existedUser = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (existedUser) {
      throw new Error(message);
    }

    const user = new User();
    user.username = username;
    user.password = password;
    user.name = name;
    user.email = email;

    return await this.userRepository.save(user);
  }

  async update(_id: string, input: UpdateUserInput): Promise<boolean> {
    const user = await this.userRepository.findOneAndUpdate(
      { _id },
      { $set: input },
    );

    return user ? true : false;
  }

  async delete(_id: string): Promise<boolean> {
    const user = new User();
    user._id = _id;
    return (await this.userRepository.remove(user)) ? true : false;
  }

  async login(input: LoginUserInput): Promise<LoginResponse> {
    const { username, password } = input;
    const message = 'Incorrect email or password. Please try again.';

    const user = await this.userRepository.findOne({
      where: {
        username: username,
      },
    });

    if (!user || !(await user.matchesPassword(password))) {
      throw new AuthenticationError(message);
    }

    const token = await jwt.sign(
      {
        issuer: 'localhost',
        subject: user._id,
        audience: user.username,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '30d',
      },
    );

    return { token };
  }

  async findOneByToken(token: string) {
    const message = 'The token you provided was invalid.';
    let currentUser;

    try {
      const decodeToken = await jwt.verify(token, process.env.SECRET_KEY);

      currentUser = await this.userRepository.findOne({
        where: {
          _id: decodeToken.subject,
        },
      });
    } catch (error) {
      throw new AuthenticationError(message);
    }

    return currentUser;
  }

  async setRole(
    _id: string,
    role: 'MEMBER' | 'MANAGER' | 'ADMIN',
  ): Promise<boolean> {
    return (await this.userRepository.updateOne({ _id }, { $set: { role } }))
      ? true
      : false;
  }
}
