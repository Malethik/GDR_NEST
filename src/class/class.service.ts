import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassService {
  constructor(private service: PrismaService) {}

  async create(createClassDto: CreateClassDto) {
    return await this.create(createClassDto);
  }

  async findAll() {
    return await this.service.mainCharClass.findMany();
  }

  async findOne(id: number) {
    return await this.service.mainCharClass.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    return await this.service.mainCharClass.update({
      where: { id },
      data: {
        id: updateClassDto.id,
        level: updateClassDto.level,
        name: updateClassDto.name,
        description: updateClassDto.description,
        dadLife: updateClassDto.dadLife,
        abilities: updateClassDto.abilities.map((ability) =>
          ability.toString(),
        ),
        attackBonus: updateClassDto.attackBonus,
        SecondAttack: updateClassDto.secondAttackBonus,
        fortitudeSave: updateClassDto.fortitudeSave,
        reflexSave: updateClassDto.reflexSave,
        willSave: updateClassDto.willSave,
      },
    });
  }

  async remove(id: number) {
    return await this.service.mainCharClass.delete({
      where: { id },
    });
  }
}
