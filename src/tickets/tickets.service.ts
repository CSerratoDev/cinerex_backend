import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository, In } from 'typeorm';
import { Seat } from '../seats/entities/seat.entity';
import { Movie } from '../movies/entities/movie.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket) 
    private readonly ticketRepository : Repository<Ticket>,
    @InjectRepository(Seat) 
    private readonly seatRepository : Repository<Seat>,
    @InjectRepository(Movie)
    private readonly movieRepository : Repository<Movie>
  ){}

  async create(createTicketDto: CreateTicketDto) : Promise<Ticket> {
    const movie = await this.movieRepository.findOneBy({ id: createTicketDto.movieId });
    if(!movie) throw new NotFoundException('Movie not found');
    
    const seats = await this.seatRepository.findBy({ id: In(createTicketDto.seatIds) });
    if(seats.length !== createTicketDto.seatIds.length) {
      throw new BadRequestException('Some seat IDs are invalid');
    }

    const ticket = this.ticketRepository.create({
      movie,
      seats,
      total: createTicketDto.total
    });

    return this.ticketRepository.save(ticket);
  }

  findAll() : Promise<Ticket[]> {
    return this.ticketRepository.find();
  }

  findOne(id: number) {
    return this.ticketRepository.findOne({where: {id}});
  }

  async remove(id: number) {
    await this.ticketRepository.delete(id);
    return "Ticket eliminated"
  }
}
