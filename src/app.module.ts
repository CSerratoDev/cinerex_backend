import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditoriumModule } from './auditorium/auditorium.module';
import { LocationModule } from './location/location.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    useFactory: typeOrmConfig,
    inject: [ConfigService]
  }),
  AuditoriumModule, 
  LocationModule, 
  ShowtimeModule, 
  MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
