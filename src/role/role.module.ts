import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from 'src/user/user.model';
import { RoleController } from './role.controller';
import { RoleModel } from './role.model';
import { RoleService } from './role.service';
import { UserRolesModel } from './user-roles.model';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [SequelizeModule.forFeature([RoleModel, UserModel, UserRolesModel])],
  exports: [RoleService],
})
export class RoleModule {}
