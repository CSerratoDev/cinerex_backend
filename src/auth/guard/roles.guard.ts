
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';
import { User } from '../entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get(Roles, context.getHandler());
        if (!roles) {
        return true;
        }
        const request = context.switchToHttp().getRequest();
        const user: User = request.user;
        return this.matchRoles(roles, user.role);
    }
    matchRoles(roles: string[], userRoles: string[]){
        let access = false;
        userRoles.forEach((userRoles)=> {
            if (roles.includes(userRoles)) access = true 
        })
        return access;
    }
}
