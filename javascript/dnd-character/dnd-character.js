//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (number) => {
  if(number < 3){
    throw new Error('Ability scores must be at least 3');
  }
  if(number > 18){
    throw new Error('Ability scores can be at most 18');
  }
  return Math.floor((Math.abs(number) - 10)/2) ;
};

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {;
     const rollD6 = () => {
      return Math.floor(Math.random() * 6) + 1
    }

    const rolls = [rollD6(), rollD6(), rollD6(), rollD6()].sort()
    this.random =  rolls[1] + rolls[2] + rolls[3];
    return this.random;
  }
}