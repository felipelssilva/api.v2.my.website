/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Query, Context } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma.service';

@Resolver(User)
export class UserResolver {
  // constructor(private readonly userService: UserService) {}
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => String)
  async hello() {
    return await 'world';
  }

  // @Query(() => [User])
  // async users(@Args('offset') offset: number, @Args('limit') limit: number) {
  //   return await this.userService.findAll(offset, limit);
  // }

  @Query((returns) => [User], { nullable: true })
  async users(@Context() ctx) {
    return this.prismaService.user.findMany();
  }

  // @Query(() => User)
  // async me(@Context('currentUser') currentUser: User) {
  //   return await currentUser;
  // }

  // @Query(() => User)
  // async user(@Args('_id') _id: string) {
  //   return await this.userService.findById(_id);
  // }

  // @Mutation(() => [User])
  // async createUser(@Args('input') input: CreateUserInput) {
  //   return await this.userService.create(input);
  // }

  // @Mutation(() => User)
  // async updateUser(
  //   @Args('_id') _id: string,
  //   @Args('input') input: UpdateUserInput,
  // ) {
  //   return await this.userService.update(_id, input);
  // }

  // @Mutation(() => Boolean)
  // async deleteUser(@Args('_id') _id: string) {
  //   return await this.userService.delete(_id);
  // }

  // @Mutation(() => LoginResponse)
  // async login(@Args('input') input: LoginUserInput) {
  //   return await this.userService.login(input);
  // }

  // @Mutation(() => Boolean)
  // async setRole(
  //   @Args('_id') _id: string,
  //   @Args('role') role: 'MEMBER' | 'MANAGER' | 'ADMIN',
  // ) {
  //   return await this.userService.setRole(_id, role);
  // }

  // @Subscription(() => User)
  // userCreated(@Context('pubSub') pubSub: any) {
  //   return pubSub.asyncIterator('userCreated');
  // }
}
