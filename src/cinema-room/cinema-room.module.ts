import { Module } from '@nestjs/common';
import { CinemaRoomService } from './cinema-room.service';
import { CinemaRoomController } from './cinema-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaRoom } from './entities/cinema-room.entity';
import { Location } from '../location/entities/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CinemaRoom, Location])],
  controllers: [CinemaRoomController],
  providers: [CinemaRoomService],
})
export class CinemaRoomModule {}
