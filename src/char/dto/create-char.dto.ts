import { Alignment } from '../entities/alignment/alignment.entity';
import { CharClass } from '../entities/class/charClass.entity';
import { Race } from '../entities/race/race.entity';

export class CreateCharDto {
  id: number;
  name: string;
  age: number;
  sex: string;
  race: Race;
  height: number;
  weight: number;
  skin: string;
  hair: string;
  eyes: string;
  alignment: Alignment;
  level: number;
  charClass: CharClass;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  ability: string[];
  spell: string[];
  inventory: string[];
  readonly createdAt: Date;
  updatedAt: Date;
}
