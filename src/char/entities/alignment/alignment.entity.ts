export class Alignment {
  id: number;
  name: string;
  description: string;
  /* lawfulGood: string;
  neutralGood: string;
  chaoticGood: string;
  lawfulNeutral: string;
  neutral: string;
  chaoticNeutral: string;
  lawfulEvil: string;
  neutralEvil: string;
  chaoticEvil: string; */
  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
export class Neutral extends Alignment {
  constructor() {
    super(1, 'Neutral', 'Neutral');
  }
}
