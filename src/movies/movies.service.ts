import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { CinemaRoom } from '.././cinema-room/entities/cinema-room.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private readonly movieRepository : Repository<Movie>,
    @InjectRepository(CinemaRoom) private readonly cinemaRoomRepository : Repository<CinemaRoom>
  ){}

  async create(createMovieDto: CreateMovieDto) {
    const cinemaRoom = await this.cinemaRoomRepository.findOneBy({id: createMovieDto.cinemaRoomId})
    if(!cinemaRoom) {
      let errors : string[] = []
      errors.push('The CinemaRoom does not exist')
      throw new NotFoundException(errors)
    }
    return this.movieRepository.save({
      ...createMovieDto,
      cinemaRoom
    })
  }

  findAll() {
    return this.movieRepository.find({
      relations: ['cinemaRoom']
    })
  }

  async findOne(id: number) {
    const movie = await this.movieRepository.findOne({
      where: {
        id
      },
      relations: ['cinemaRoom']
    })
    if(!movie) {
      throw new NotFoundException("Esta movie no existe")
    } 
    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.findOne(id)
    Object.assign(movie, updateMovieDto)
    if(updateMovieDto.cinemaRoomId){
      const cinemaRoom = await this.cinemaRoomRepository.findOneBy({
        id: updateMovieDto.cinemaRoomId
      })
      if(!cinemaRoom) {
        let errors : string[] = []
        errors.push('The cinemaRoom does not exist')
        throw new NotFoundException(errors)
      }
      movie.cinemaRoom = cinemaRoom;
    }
    return await this.movieRepository.save(movie)
  }

  async remove(id: number) {
    const movie = await this.findOne(id)
    await this.movieRepository.delete(movie);
    return "Movie eliminada"
  }
}
