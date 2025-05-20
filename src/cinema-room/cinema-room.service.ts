import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCinemaRoomDto } from './dto/create-cinema-room.dto';
import { UpdateCinemaRoomDto } from './dto/update-cinema-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CinemaRoom } from './entities/cinema-room.entity';
import { Repository } from 'typeorm';
import { Seat } from '../seats/entities/seat.entity';
import { Location } from '../location/entities/location.entity';

@Injectable()
export class CinemaRoomService {
  constructor(
    @InjectRepository(CinemaRoom) private readonly cinemaRoomRepository : Repository<CinemaRoom>,
    @InjectRepository(Location) private readonly locationRepository : Repository<Location>
  ){}

async create(createCinemaRoomDto: CreateCinemaRoomDto): Promise<CinemaRoom> {
  const { name, seats, locationId } = createCinemaRoomDto;

  // Validar que exista la ubicación
  const location = await this.locationRepository.findOneBy({ id: locationId });
  if (!location) {
    throw new NotFoundException(`Location with id ${locationId} not found`);
  }

  const room = new CinemaRoom();
  room.name = name;
  room.location = location;

  // Asignar los asientos
  room.seats = seats.map(seatData => {
    const seat = new Seat();
    seat.row = seatData.code; 
    seat.status = typeof seatData.isAvailable === 'boolean' ? seatData.isAvailable : true;
    return seat;
  });

  // Guardar sala junto con sus asientos
  const savedRoom = await this.cinemaRoomRepository.save(room);
  return savedRoom;
}


  findAll() {
    return this.cinemaRoomRepository.find({ relations: ['location'] });
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
