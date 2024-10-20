/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateCharDto } from './dto/create-char.dto';
import { UpdateCharDto } from './dto/update-char.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Char } from './entities/char.entity';
import { MainCharClass } from './entities/class/class.entity';

@Injectable()
export class CharService {
  constructor(private service: PrismaService) {}
  //create without bonuses
  /*  async create(createCharDto: CreateCharDto) {
    return await this.service.character.create({
      data: {
        name: createCharDto.name,
        age: createCharDto.age,
        sex: createCharDto.sex,
        race: {
          connect: { id: createCharDto.race.id },
        },
        height: createCharDto.height,
        weight: createCharDto.weight,
        skin: createCharDto.skin,
        hair: createCharDto.hair,
        eyes: createCharDto.eyes,
        alignment: {
          connect: { id: createCharDto.alignment.id },
        },
        level: createCharDto.level,
        pE: createCharDto.pE,
        charClass: {
          connect: { id: createCharDto.charClass.id },
        },
        life: createCharDto.life,
        str: createCharDto.str,
        dex: createCharDto.dex,
        con: createCharDto.con,
        int: createCharDto.int,
        wis: createCharDto.wis,
        cha: createCharDto.cha,
        cA: createCharDto.cA,
        atk: createCharDto.atk,
        abilities: {
          connect: createCharDto.abilities,
        },
        spell: createCharDto.spell,
        inventory: createCharDto.inventory,
        armor: {
          connect: { id: createCharDto.armor.id },
        },
        weapon: {
          connect: { id: createCharDto.weapon.id },
        },
        user: {
          connect: { id: createCharDto.userId },
        },
      },
    });
  } */

  //create with bonuses
  async create(createCharDto: CreateCharDto) {
    const newCharacter = await this.service.character.create({
      data: {
        name: createCharDto.name,
        age: createCharDto.age,
        sex: createCharDto.sex,
        race: {
          connect: { id: createCharDto.race.id },
        },
        height: createCharDto.height,
        weight: createCharDto.weight,
        skin: createCharDto.skin,
        hair: createCharDto.hair,
        eyes: createCharDto.eyes,
        alignment: {
          connect: { id: createCharDto.alignment.id },
        },
        level: createCharDto.level,
        pE: createCharDto.pE,
        charClass: {
          connect: { id: createCharDto.charClass.id },
        },
        life: createCharDto.life,
        str: createCharDto.str,
        dex: createCharDto.dex,
        con: createCharDto.con,
        int: createCharDto.int,
        wis: createCharDto.wis,
        cha: createCharDto.cha,
        cA: createCharDto.cA,
        atk: createCharDto.atk,
        secondAtk: createCharDto.secondAtk,
        fortitudeSave: createCharDto.fortitudeSave,
        reflexSave: createCharDto.reflexSave,
        willSave: createCharDto.willSave,
        iniciative: createCharDto.iniciative,
        gold: createCharDto.gold,
        abilities: {
          connect: createCharDto.abilities,
        },
        spell: createCharDto.spell,
        inventory: createCharDto.inventory,
        armor: {
          connect: { id: createCharDto.armor.id },
        },
        weapon: {
          connect: { id: createCharDto.weapon.id },
        },
        user: {
          connect: { id: createCharDto.userId },
        },
      },
      include: {
        alignment: true,
        charClass: true,
        abilities: true,
        weapon: true,
        armor: true,
      },
    });

    return this.applyBonuses(newCharacter);
  }

  private applyBonuses(character: any) {
    //bonus attributes
    let lifeBonus = 0;
    let strBonus = 0;
    let dexBonus = 0;
    let conBonus = 0;
    let intBonus = 0;
    let wisBonus = 0;
    let chaBonus = 0;
    //combact bonus
    let atkBonus = 0;
    let cABonus = 0;

    //life bonus
    lifeBonus += character.charClass.dadLife;
    lifeBonus += Math.floor((character.con - 10) / 2);

    //attributes bonus
    if (character.race) {
      strBonus += character.race.str || 0;
      dexBonus += character.race.dex || 0;
      conBonus += character.race.con || 0;
      intBonus += character.race.int || 0;
      wisBonus += character.race.wis || 0;
      chaBonus += character.race.cha || 0;
    }
    //charClass bonus
    if (character.charClass) {
      atkBonus += character.charClass.attackBonus;
    }

    //weapon bonus
    if (character.weapon) {
      atkBonus += character.weapon.effect.atk || 0;
    }

    //armor bonus
    if (character.armor) {
      cABonus += character.armor.effect.cA || 0;
    }

    character.atk += atkBonus;
    character.cA += cABonus;
    character.life += lifeBonus;
    character.str += strBonus;
    character.dex += dexBonus;
    character.con += conBonus;
    character.int += intBonus;
    character.wis += wisBonus;
    character.cha += chaBonus;

    return character;
  }

  //create class using CharClass

  async findAll() {
    return await this.service.character.findMany();
  }

  async findOne(id: number) {
    const character = await this.service.character.findUnique({
      where: { id },
      include: {
        race: true,
        alignment: true,
        charClass: true,
        abilities: true,
        armor: true,
        weapon: true,
        user: true,
      },
    });

    if (!character) {
      throw new Error('Character not found');
    }

    // Calcola i bonus
    return this.applyBonuses(character);
  }

  update(id: number, updateCharDto: UpdateCharDto) {
    return `This action updates a #${id} char`;
  }

  remove(id: number) {
    return `This action removes a #${id} char`;
  }
}
