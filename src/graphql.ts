
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum RoleEnum {
    MEMBER = "MEMBER",
    MANAGER = "MANAGER",
    ADMIN = "ADMIN"
}

export class CreateCertificateInput {
    name: string;
    description: string;
    url: string;
    order: string;
    img: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class UpdateCertificateInput {
    name?: Nullable<string>;
    description: string;
    url: string;
    order: string;
    img: string;
    createdAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
    updatedAt: string;
}

export class CreateContactInput {
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class UpdateContactInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    subject?: Nullable<string>;
    message?: Nullable<string>;
    createdAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
    updatedAt: string;
}

export class CreateGraduationInput {
    name: string;
    title: string;
    description: string;
    img: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class UpdateGraduationInput {
    name?: Nullable<string>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    img?: Nullable<string>;
    createdAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
    updatedAt: string;
}

export class CreateProjectInput {
    name: string;
    description: string;
    url: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class UpdateProjectInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    url?: Nullable<string>;
    createdAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
    updatedAt: string;
}

export class CreateUserInput {
    username: string;
    name: string;
    password: string;
    email: string;
}

export class UpdateUserInput {
    username?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
    email?: Nullable<string>;
}

export class LoginUserInput {
    username: string;
    password: string;
}

export class Certificate {
    _id: string;
    name: string;
    description: string;
    url: string;
    order: string;
    img: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export abstract class IQuery {
    abstract certificates(): Nullable<Certificate[]> | Promise<Nullable<Certificate[]>>;

    abstract certificate(_id: string): Nullable<Certificate> | Promise<Nullable<Certificate>>;

    abstract contacts(): Nullable<Contact[]> | Promise<Nullable<Contact[]>>;

    abstract contact(_id: string): Nullable<Contact> | Promise<Nullable<Contact>>;

    abstract graduations(): Nullable<Graduation[]> | Promise<Nullable<Graduation[]>>;

    abstract graduation(_id: string): Nullable<Graduation> | Promise<Nullable<Graduation>>;

    abstract projects(): Nullable<Project[]> | Promise<Nullable<Project[]>>;

    abstract project(_id: string): Nullable<Project> | Promise<Nullable<Project>>;

    abstract hello(): string | Promise<string>;

    abstract me(): Nullable<User> | Promise<Nullable<User>>;

    abstract users(offset: number, limit: number): Nullable<User[]> | Promise<Nullable<User[]>>;

    abstract user(_id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCertificate(input: CreateCertificateInput): Nullable<Certificate> | Promise<Nullable<Certificate>>;

    abstract updateCertificate(_id: string, input: UpdateCertificateInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteCertificate(_id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createContact(input: CreateContactInput): Nullable<Contact> | Promise<Nullable<Contact>>;

    abstract updateContact(_id: string, input: UpdateContactInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteContact(_id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createGraduation(input: CreateGraduationInput): Nullable<Graduation> | Promise<Nullable<Graduation>>;

    abstract updateGraduation(_id: string, input: UpdateGraduationInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteGraduation(_id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createProject(input: CreateProjectInput): Nullable<Project> | Promise<Nullable<Project>>;

    abstract updateProject(_id: string, input: UpdateProjectInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteProject(_id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(_id: string, input: UpdateUserInput): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteUser(_id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deleteUsers(): boolean | Promise<boolean>;

    abstract login(input: LoginUserInput): Nullable<LoginResponse> | Promise<Nullable<LoginResponse>>;

    abstract setRole(_id: string, role: RoleEnum): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class Contact {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class Graduation {
    _id: string;
    name: string;
    title: string;
    description: string;
    img: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class Project {
    _id: string;
    name: string;
    description: string;
    url: string;
    createdAt: string;
    deletedAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
}

export class LoginResponse {
    token: string;
}

export class User {
    _id: string;
    username: string;
    name: string;
    password: string;
    email: string;
    role: RoleEnum;
    status: boolean;
    createdAt: string;
}

export abstract class ISubscription {
    abstract userCreated(): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
