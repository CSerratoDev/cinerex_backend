import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { CinemaRoom } from 'src/cinema-room/entities/cinema-room.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location) private readonly locationRepository: Repository<Location>,
    @InjectRepository(CinemaRoom) private readonly cinemaRoomRepository : Repository<CinemaRoom>
  ){}

  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find();
  }

  async findOne(id: number) {
    const location = await this.locationRepository.findOne({
      where: { id },
      relations: ['rooms']
    })
    if(!location) {
      throw new NotFoundException("La localidad no existe")
    }
    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    const location = await this.findOne(id);
    Object.assign(location, updateLocationDto);
    await this.locationRepository.save(location);
    return await this.findOne(id);
  }

  async remove(id: number) {
    const location = await this.locationRepository.findOne({
      where : { id },
      relations: ['rooms'],
    });

    if(!location) {
      throw new NotFoundException("Location not found");
    }

    if(location.rooms?.length) {
      for(const room of location.rooms) {
        room.locationId = null;
      }
      await this.cinemaRoomRepository.save(location.rooms);
    }
    await this.locationRepository.remove(location);
    return "Location eliminated"

  }
}
