import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { RoleModel } from 'src/role/role.model';
import { RoleModule } from 'src/role/role.module';
import { UserRolesModel } from 'src/role/user-roles.model';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([UserModel, RoleModel, UserRolesModel]),
    RoleModule,
  ],
  exports: [UserService],
})
export class UserModule {}
