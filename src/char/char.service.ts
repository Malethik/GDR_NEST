/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';

@Injectable()
export class CharService {
  create(createCharDto: CreateCharDto) {
    return 'This action adds a new char';
  }

  findAll() {
    return `This action returns all char`;
  }

  findOne(id: number) {
    return `This action returns a #${id} char`;
  }

  update(id: number, updateCharDto: UpdateCharDto) {
    return `This action updates a #${id} char`;
  }

  remove(id: number) {
    return `This action removes a #${id} char`;
  }
}
