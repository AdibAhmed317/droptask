import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async GetUserProfile(@Param('id') id: number) {
    return await this.userService.findById(id);
  }
}
