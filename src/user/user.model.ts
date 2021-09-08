import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface InterfaceUserCreation {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, InterfaceUserCreation> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isBanned: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;
}