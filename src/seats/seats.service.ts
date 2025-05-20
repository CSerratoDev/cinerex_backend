import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeatsService {
  @InjectRepository(Seat) private readonly seatRepository : Repository<Seat>
  
  create(createSeatDto: CreateSeatDto) {
    return "created seat"
  } 

  findAll() {
    return this.seatRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} seat`;
  }

  update(id: number, updateSeatDto: UpdateSeatDto) {
    return `This action updates a #${id} seat`;
  }
}
