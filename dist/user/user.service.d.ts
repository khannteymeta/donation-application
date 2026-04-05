import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly entityManager;
    constructor(userRepository: Repository<User>, entityManager: EntityManager);
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
}
