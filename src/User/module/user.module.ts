import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.PG_PORT),
      password: process.env.PG_PASSWORD,
      username: process.env.PG_USER,
      entities: [],
      database: process.env.PG_DB,
      synchronize: true,
      logging: true,
    }),
  ],
})
export class UserModule {}
