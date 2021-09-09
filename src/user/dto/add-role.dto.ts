import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Роль' })
  readonly value: string;

  @ApiProperty({ example: 5, description: 'Id пользователя' })
  readonly userId: number;
}
