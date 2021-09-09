import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/role-auth.decorator';
import { RoleGuard } from 'src/auth/role.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@ApiTags('Пользователи')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Создать пользователя' })
  @ApiResponse({ status: 201, type: UserModel })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [UserModel] })
  @Roles('ADMIN')
  // @UseGuards(JwtAuthGuard)
  @UseGuards(RoleGuard)
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'Назначить роль пользователю' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Post('/role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.userService.addRole(addRoleDto);
  }

  @ApiOperation({ summary: 'Забанить/разбанить пользователя' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Post('/ban')
  ban(@Body() banUserDto: BanUserDto) {
    return this.userService.ban(banUserDto);
  }
}
