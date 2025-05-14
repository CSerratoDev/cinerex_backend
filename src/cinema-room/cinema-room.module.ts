import { Module } from '@nestjs/common';
import { CinemaRoomService } from './cinema-room.service';
import { CinemaRoomController } from './cinema-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaRoom } from './entities/cinema-room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CinemaRoom])],
  controllers: [CinemaRoomController],
  providers: [CinemaRoomService],
})
export class CinemaRoomModule {}
