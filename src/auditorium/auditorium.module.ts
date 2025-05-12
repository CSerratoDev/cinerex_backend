import { Module } from '@nestjs/common';
import { AuditoriumService } from './auditorium.service';
import { AuditoriumController } from './auditorium.controller';

@Module({
  controllers: [AuditoriumController],
  providers: [AuditoriumService],
})
export class AuditoriumModule {}
