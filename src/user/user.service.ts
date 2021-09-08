import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
  ) {}

  async create(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async getAll() {
    return await this.userRepository.findAll();
  }
}
