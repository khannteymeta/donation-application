import { UserRole } from '../entities/user.entity';
export declare class CreateUserDto {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    phone?: string;
    role?: UserRole;
    created_at?: Date;
    constructor(createUserDto: Partial<CreateUserDto>);
}
