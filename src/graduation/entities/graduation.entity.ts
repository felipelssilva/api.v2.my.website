/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { IsString, IsNotEmpty } from 'class-validator';
import uuid = require('uuid');
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Graduation {
  @Field()
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  img: string;

  @Field((type) => Date)
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @Field((type) => Date)
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string;

  @Field((type) => Date, { nullable: true })
  @UpdateDateColumn({ type: 'timestamp' })
  deletedAt: string;

  @BeforeInsert()
  async b4create() {
    this.id = await uuid.v1();
  }
}
