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

@Entity()
export class Contact {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  subject: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  message: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  deletedAt: string;

  @BeforeInsert()
  async b4create() {
    this._id = await uuid.v1();
  }
}
