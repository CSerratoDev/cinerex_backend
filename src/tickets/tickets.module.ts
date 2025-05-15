import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Seat } from '../seats/entities/seat.entity';
import { Movie } from '../movies/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Seat, Movie])],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
