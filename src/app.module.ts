import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChapterModule } from './chapter/chapter.module';
import { Chapter } from './chapter/chapter.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'b2c',
      username: 'postgres',
      password: 'master130',
      synchronize: true,
      entities: [Chapter],
    }),
    ChapterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
