import { Ability } from '../../char/entities/ability/ability.entity';

export class MainCharClass {
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

  /* export class Barbarian extends MainCharClass {
  constructor() {
    super(
      1,
      1,
      'Barbarian',
      'A fierce warrior of primitive background who can enter a battle rage.',
      12,
      [new Rage()],
      {
        attackBonus: 1,
        secondAttackBonus: 0,
        fortitudeSave: 2,
        reflexSave: 0,
        willSave: 0,
      },
    );
  } */

  applyLevelBonus() {
    if (this.level === 2) {
      //this.abilities.push('Reckless Attack');
      this.attackBonus = 2;
      this.fortitudeSave = 3;
    } else if (this.level === 3) {
      // this.abilities.push('Danger Sense');
      this.attackBonus = 3;
      this.fortitudeSave = 3;
      this.reflexSave = 1;
      this.willSave = 1;
    } else if (this.level === 4) {
      // this.abilities.push('Fast Movement');
      this.attackBonus = 4;
      this.fortitudeSave = 4;
      this.reflexSave = 1;
      this.willSave = 1;
    } else if (this.level === 5) {
      // this.abilities.push('Prodigious Evasion');
      this.attackBonus = 5;
      this.fortitudeSave = 4;
      this.reflexSave = 1;
      this.willSave = 1;
    } else if (this.level === 6) {
      // this.abilities.push('Second Attack');
      this.attackBonus = 6;
      this.secondAttackBonus = 1;
      this.fortitudeSave = 5;
      this.reflexSave = 2;
      this.willSave = 2;
    } else if (this.level === 7) {
      // this.abilities.push('Damage Reduction');
      this.attackBonus = 7;
      this.secondAttackBonus = 2;
      this.fortitudeSave = 5;
      this.reflexSave = 2;
      this.willSave = 2;
    } else if (this.level === 8) {
      // this.abilities.push('Rage');
      this.attackBonus = 8;
      this.secondAttackBonus = 3;
      this.fortitudeSave = 6;
      this.reflexSave = 2;
      this.willSave = 2;
    } else if (this.level === 9) {
      //  this.abilities.push('Danger Sense');
      this.attackBonus = 9;
      this.secondAttackBonus = 4;
      this.fortitudeSave = 6;
      this.reflexSave = 3;
      this.willSave = 3;
    } else if (this.level === 10) {
      // this.abilities.push('Damage Reduction');
      this.attackBonus = 10;
      this.secondAttackBonus = 5;
      this.fortitudeSave = 7;
      this.reflexSave = 3;
      this.willSave = 3;
    }
    //must complete till lvl 20
  }
}
