import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCinemaRoomDto } from './dto/create-cinema-room.dto';
import { UpdateCinemaRoomDto } from './dto/update-cinema-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CinemaRoom } from './entities/cinema-room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CinemaRoomService {
  constructor(
    @InjectRepository(CinemaRoom) private readonly cinemaRoomRepository : Repository<CinemaRoom>
  ){}

  create(createCinemaRoomDto: CreateCinemaRoomDto) {
    return this.cinemaRoomRepository.save(createCinemaRoomDto);
  }

  findAll() {
    return this.cinemaRoomRepository.find()
  }

  async findOne(id: number) {
    const cinemaRoom = await this.cinemaRoomRepository.findOneBy({id})
    if(!cinemaRoom) {
      throw new NotFoundException('The CinemaRoom does not exist')
    }
    return cinemaRoom;
  }

  async update(id: number, updateCinemaRoomDto: UpdateCinemaRoomDto) {
    const cinemaRoom = await this.findOne(id)
    cinemaRoom.name = updateCinemaRoomDto.name
    return await this.cinemaRoomRepository.save(cinemaRoom);
  }

  async remove(id: number) {
    const cinemaRoom = await this.findOne(id)
    await this.cinemaRoomRepository.remove(cinemaRoom)
    return "CinemaRoom eliminated"  
  }
}
