import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleModel } from './role.model';
import { RoleService } from './role.service';

@ApiTags('Роли')
@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @ApiOperation({ summary: 'Создать роль' })
  @ApiResponse({ status: 201, type: RoleModel })
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.create(roleDto);
  }

  @ApiOperation({ summary: 'Получить роль по названию' })
  @ApiResponse({ status: 200, type: RoleModel })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
