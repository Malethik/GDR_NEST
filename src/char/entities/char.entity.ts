import { Ability } from './ability/ability.entity';
import { Alignment } from './alignment/alignment.entity';
import { MainCharClass } from './class/class.entity';
import { Race } from './race/race.entity';

export class Char {
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
  pE: number;
  charClass: MainCharClass;
  life: number;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  abilities: Ability[];
  spell: string[];
  inventory: string[];
  readonly createdAt: Date;
  updatedAt: Date;
  constructor(
    id: number,
    //no logical atributtes
    name: string,
    age: number,
    sex: string,
    race: Race,
    height: number,
    weight: number,
    skin: string,
    hair: string,
    eyes: string,
    //logical atributtes
    alignment: Alignment,
    level: number,
    pE: number,
    charClass: MainCharClass,
    life: number,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
    abilities: Ability[],
    spell: string[],
    inventory: string[],
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.race = race;
    this.height = height;
    this.weight = weight;
    this.skin = skin;
    this.hair = hair;
    this.eyes = eyes;
    this.alignment = alignment;
    this.level = this.calcolateLevel();
    this.pE = pE;
    this.charClass = charClass;
    this.life = this.calcolateLifeFromClass() + this.level * this.con;
    this.str = str + this.race.str;
    this.dex = dex + this.race.dex;
    this.con = con + this.race.con;
    this.int = int + this.race.int;
    this.wis = wis + this.race.wis;
    this.cha = cha + this.race.cha;
    this.abilities = abilities.concat(this.charClass.abilities);
    this.spell = spell;
    this.inventory = inventory;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  calcolateLevel(): number {
    if (this.pE < 1000) {
      return 1;
    } else if (this.pE < 3000 && this.pE >= 1000) {
      return 2;
    } else if (this.pE < 6000 && this.pE >= 3000) {
      return 3;
    } else if (this.pE < 10000 && this.pE >= 6000) {
      return 4;
    } else if (this.pE < 15000 && this.pE >= 10000) {
      return 5;
    } else if (this.pE < 21000 && this.pE >= 15000) {
      return 6;
    } else if (this.pE < 28000 && this.pE >= 21000) {
      return 7;
    } else if (this.pE < 36000 && this.pE >= 28000) {
      return 8;
    } else if (this.pE < 45000 && this.pE >= 36000) {
      return 9;
    } else if (this.pE < 55000 && this.pE >= 45000) {
      return 10;
    } else if (this.pE < 66000 && this.pE >= 55000) {
      return 11;
    } else if (this.pE < 78000 && this.pE >= 66000) {
      return 12;
    } else if (this.pE < 91000 && this.pE >= 78000) {
      return 13;
    } else if (this.pE < 105000 && this.pE >= 91000) {
      return 14;
    } else if (this.pE < 120000 && this.pE >= 105000) {
      return 15;
    } else if (this.pE < 136000 && this.pE >= 120000) {
      return 16;
    } else if (this.pE < 153000 && this.pE >= 136000) {
      return 17;
    } else if (this.pE < 171000 && this.pE >= 153000) {
      return 18;
    } else if (this.pE < 190000 && this.pE >= 171000) {
      return 19;
    } else {
      return 20;
    }
  }

  calcolateLifeFromClass(): number {
    return Math.floor(Math.random() * this.charClass.dadLife) + 1;
  }

  applyAbilityEffect(effect: { [key: string]: number }): void {
    for (const key in effect) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        (this as any)[key] += effect[key];
      }
    }
  }
  useAbility(abilityName: string): void {
    const ability = this.abilities.find((ab) => ab.name === abilityName);
    if (ability) {
      this.applyAbilityEffect(ability.effect);
    } else {
      console.log(`Ability ${abilityName} not found.`);
    }
  }
  getModifier(value: number): number {
    return Math.floor((value - 10) / 2);
  }
}
