import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addUsers(
    @Body('username') userUsername: string,
    @Body('password') userPassword: string,
  ) {
    const generatedId = this.usersService.addUser(userUsername, userPassword);
    return { id: generatedId };
  }
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getUser(userId);
  }
}
