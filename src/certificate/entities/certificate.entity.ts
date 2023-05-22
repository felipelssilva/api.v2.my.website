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
export class Certificate {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  url: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  order: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  img: string;

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
