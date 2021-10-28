import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  addUser(username: string, password: any) {
    const userId = Math.random().toString();
    const newUser = new User(userId, username, password);
    this.users.push(newUser);
    return userId;
  }
  getUsers() {
    return [...this.users];
  }
  getUser(userId: string) {
    const user = this.users.find((userId) => user.id == userId);
    if (!user) {
      throw new NotFoundException(`Sorry, we couldn't find this user.`);
    }
    return { ...user };
  }

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
