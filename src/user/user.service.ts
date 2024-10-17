import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

const select = {
  id: true,
  name: true,
  email: true,
  password: false,
  createdAt: true,
  updatedAt: true,
};
@Injectable()
export class UserService {
  constructor(private service: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return await this.service.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
  }

  async findAll() {
    return await this.service.user.findMany({ select });
  }

  async findOne(id: number) {
    return await this.service.user.findUnique({
      where: { id },
      select,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.service.user.update({
      where: { id },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
      },
    });
  }

  async remove(id: number) {
    return await this.service.user.delete({
      where: { id },
    });
  }
}
