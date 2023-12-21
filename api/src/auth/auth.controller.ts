import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('registration')
  async registerUser(@Body() createdto: CreateUserDto) {
    await this.userService.createAccount(createdto);
  }
}
