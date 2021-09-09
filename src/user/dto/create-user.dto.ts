import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@email.com', description: 'Почтовый адрес' })
  readonly email: string;

  @ApiProperty({ example: 'yourPassword', description: 'Пароль' })
  readonly password: string;
}
