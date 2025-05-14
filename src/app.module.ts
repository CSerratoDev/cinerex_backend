import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MoviesModule } from './movies/movies.module';
import { SeatsModule } from './seats/seats.module';
import { TicketsModule } from './tickets/tickets.module';
import { CinemaRoomModule } from './cinema-room/cinema-room.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    useFactory: typeOrmConfig,
    inject: [ConfigService]
  }),
  LocationModule, 
  MoviesModule,
  SeatsModule, 
  TicketsModule, 
  CinemaRoomModule
  ]
})
export class AppModule {}
