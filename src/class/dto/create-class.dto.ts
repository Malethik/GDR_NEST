import { Ability } from '../../char/entities/ability/ability.entity';

export class CreateClassDto {
  id: number;
  level: number;
  name: string;
  description: string;
  dadLife: number;
  abilities: Ability[];
  attackBonus: number;
  secondAttackBonus: number;
  fortitudeSave: number;
  reflexSave: number;
  willSave: number;
}
