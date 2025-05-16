import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SeederService } from './seeder.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        AuthModule
    ],
    providers: [SeederService]
})
export class SeederModule {}
