export class Ability {
  name: string;
  description: string;
  effect: { [key: string]: number };
  constructor(
    name: string,
    description: string,
    effect: { [key: string]: number },
  ) {
    this.name = name;
    this.description = description;
    this.effect = effect;
  }
}
// elenco skills
// class skill Barbarian
/*'Unarmored Defense', 'Reckless Attack', 'Danger Sense', 'Fast Movement',
'Prodigious Evasion','Second Attack','Damage Reduction'  */
export class Rage extends Ability {
  constructor() {
    super(
      'Rage',
      'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.',
      {
        str: 4,
        con: 4,
        fortitudeSave: 2,
        cA: -2,
      },
    );
  }
}
