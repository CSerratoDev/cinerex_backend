import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CinemaRoomService } from './cinema-room.service';
import { CreateCinemaRoomDto } from './dto/create-cinema-room.dto';
import { UpdateCinemaRoomDto } from './dto/update-cinema-room.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('cinema-room')
export class CinemaRoomController {
  constructor(
    private readonly cinemaRoomService: CinemaRoomService
  ) {}

  @Post()
  create(@Body() createCinemaRoomDto: CreateCinemaRoomDto) {
    return this.cinemaRoomService.create(createCinemaRoomDto);
  }

  @Get()
  findAll() {
    return this.cinemaRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', IdValidationPipe) id: string) {
    return this.cinemaRoomService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', IdValidationPipe) id: string, @Body() updateCinemaRoomDto: UpdateCinemaRoomDto) {
    return this.cinemaRoomService.update(+id, updateCinemaRoomDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: string) {
    return this.cinemaRoomService.remove(+id);
  }
}
