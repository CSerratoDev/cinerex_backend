import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import * as bcrypt from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
    constructor(
        @InjectRepository(User) private readonly userRepository : Repository<User>,
        private readonly authService : AuthService,
    ){}
    //crea un super admin por default
    async onApplicationBootstrap(){
        const adminEmail = 'admin@cinerex.com';
        const existingAdmin = await this.userRepository.findOneBy({email: adminEmail});

        if(!existingAdmin) {
            
            await this.authService.signUp({
                email: adminEmail,
                password: "Admin1234",
                role: ['Admin']
            })
            console.log("SuperAdmin created: admin@cinerex.com / 12345678");
        } else {
            console.log("SuperAdmin already exists: admin@cinerex.com / 12345678");
        }
    }
}
