import { UserService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login-user.dto';
import { CoreOutput } from 'src/common/dtos/output.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UserService);
    signup(createUserDto: CreateUserDto): Promise<CoreOutput>;
    signin(userDTO: LoginDto): Promise<CoreOutput>;
}
