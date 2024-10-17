export class User {
  private id: number;
  private name: string;
  private email: string;
  private password: string;
  private readonly createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  //getter setter
  get getId() {
    return this.id;
  }
  set setId(id: number) {
    this.id = id;
  }
  get getName() {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }

  get getEmail() {
    return this.email;
  }
  set setEmail(email: string) {
    this.email = email;
  }

  get getPassword() {
    return this.password;
  }

  set setPassword(password: string) {
    this.password = password;
  }

  get getCreatedAt() {
    return this.createdAt;
  }

  get getUpdatedAt() {
    return this.updatedAt;
  }
  set setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
}
