export class Item {
  id: number;
  name: string;
  description: string;
  value: number;
  weight: number;
  effect: { [key: string]: number };
  constructor(
    id: number,
    name: string,
    description: string,
    value: number,
    weight: number,
    effect: { [key: string]: number },
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.weight = weight;
    this.effect = effect;
  }
}

export class Weapon extends Item {
  constructor(
    id: number,
    name: string,
    description: string,
    value: number,
    weight: number,
    effect: { [key: string]: number },
  ) {
    super(id, name, description, value, weight, effect);
  }
}
export class Armor extends Item {
  constructor(
    id: number,
    name: string,
    description: string,
    value: number,
    weight: number,
    effect: { [key: string]: number },
  ) {
    super(id, name, description, value, weight, effect);
  }
}

export class Sword extends Weapon {
  constructor() {
    super(
      1,
      'Sword',
      'A sword is a bladed melee weapon intended for cutting or thrusting that is longer than a knife or dagger, consisting of a long blade attached to a hilt.',
      10,
      1,
      { damage: 6 },
    );
  }
}
export class PaddedArmor extends Armor {
  constructor() {
    super(
      1,
      'Padded Armor',
      'Padded armor consists of quilted layers of cloth and batting.',
      5,
      5,
      { cA: 1 },
    );
  }
}
