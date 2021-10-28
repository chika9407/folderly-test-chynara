import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];
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
}
