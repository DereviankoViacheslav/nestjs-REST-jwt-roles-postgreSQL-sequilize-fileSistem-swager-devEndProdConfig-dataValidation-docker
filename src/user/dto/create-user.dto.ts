import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'example@email.com', description: 'Почтовый адрес' })
  @IsString({ message: 'Email должен быть строкой' })
  @IsEmail({}, { message: 'Невалидный email' })
  readonly email: string;

  @ApiProperty({ example: 'yourPassword', description: 'Пароль' })
  @IsString({ message: 'Пароль должен быть строкой' })
  @Length(4, 16, { message: 'Пароль должен быть от 4 до 16 символов' })
  readonly password: string;
}
