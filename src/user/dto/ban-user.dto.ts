import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: true, description: 'Статус бана' })
  readonly isBanned: boolean;

  @ApiProperty({ example: 4, description: 'Id пользователя' })
  readonly userId: number;

  @ApiProperty({
    example: 'Description of the reasons of the ban',
    description: 'Описание причины бана',
  })
  readonly banReason?: string;
}
