import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditoriumService } from './auditorium.service';
import { CreateAuditoriumDto } from './dto/create-auditorium.dto';
import { UpdateAuditoriumDto } from './dto/update-auditorium.dto';

@Controller('auditorium')
export class AuditoriumController {
  constructor(private readonly auditoriumService: AuditoriumService) {}

  @Post()
  create(@Body() createAuditoriumDto: CreateAuditoriumDto) {
    return this.auditoriumService.create(createAuditoriumDto);
  }

  @Get()
  findAll() {
    return this.auditoriumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditoriumService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditoriumDto: UpdateAuditoriumDto) {
    return this.auditoriumService.update(+id, updateAuditoriumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditoriumService.remove(+id);
  }
}
