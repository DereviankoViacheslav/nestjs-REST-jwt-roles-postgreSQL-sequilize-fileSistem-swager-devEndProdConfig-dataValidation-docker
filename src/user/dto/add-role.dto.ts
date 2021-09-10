import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Роль' })
  @IsString({ message: 'Должно быть строкой' })
  readonly value: string;

  @ApiProperty({ example: 5, description: 'Id пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}
