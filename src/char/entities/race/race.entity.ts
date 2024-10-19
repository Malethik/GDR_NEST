export class Race {
  id: number;
  name: string;
  description: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  constructor(
    id: number,
    name: string,
    description: string,
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
  }
}

export class Human extends Race {
  constructor() {
    super(
      1,
      'Human',
      'Humans are the most adaptable and ambitious people',
      0,
      0,
      0,
      0,
      0,
      0,
    );
  }
}
export class Elf extends Race {
  constructor() {
    super(
      2,
      'Elf',
      'Elves are a magical people of otherworldly grace',
      0,
      2,
      -2,
      0,
      0,
      0,
    );
  }
}
export class Dwarf extends Race {
  constructor() {
    super(
      3,
      'Dwarf',
      'Dwarves are known for their skill in warfare, their ability to withstand physical and magical punishment',
      0,
      0,
      2,
      0,
      0,
      -2,
    );
  }
}
export class Gnome extends Race {
  constructor() {
    super(
      4,
      'Gnome',
      'Gnomes are distant relatives of the fey',
      -2,
      0,
      2,
      0,
      0,
      0,
    );
  }
}
export class HalfElf extends Race {
  constructor() {
    super(
      5,
      'Half-Elf',
      'Half-elves are not truly an elf or a human',
      0,
      0,
      0,
      0,
      0,
      0,
    );
  }
}
export class HalfOrc extends Race {
  constructor() {
    super(
      6,
      'Half-Orc',
      'Half orcs are monstrosities, their tragic existence an affront to the natural order',
      2,
      0,
      0,
      -2,
      0,
      -2,
    );
  }
}
export class Halfling extends Race {
  constructor() {
    super(
      7,
      'Halfling',
      'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense',
      -2,
      2,
      0,
      0,
      0,
      0,
    );
  }
}
