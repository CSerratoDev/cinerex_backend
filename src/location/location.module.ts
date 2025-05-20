import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { CinemaRoom } from '../cinema-room/entities/cinema-room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Location, CinemaRoom])],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
