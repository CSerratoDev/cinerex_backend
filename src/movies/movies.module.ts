import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { CinemaRoom } from '.././cinema-room/entities/cinema-room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, CinemaRoom])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
