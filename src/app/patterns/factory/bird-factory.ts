// export interface Bird {
//   name: string;
//   speak(): string;
// }
// export function BirdFactory implements BirdFactory {
//   create(name: string) {
//     switch (name) {
//       case 'eagle':
//         break;
//       case 'hawk':
//         break;

//       default:
//         break;
//     }
//   }
// }

export class HeroFactory {
  private name: string;
  private health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  introduce() {
    console.log(`Hello, I am ${this.name}. Pleasure to meet you.`);
  }
}

export function createHero(name: string, health: number) {
  return new HeroFactory(name, health);
}
