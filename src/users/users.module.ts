import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/user.controller';

@Module({
  controllers: [UsersController]
})
export class UsersModule {}
