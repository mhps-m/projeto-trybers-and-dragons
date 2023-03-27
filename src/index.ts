import Character from './Character';

import { Orc } from './Races';
import { Warrior } from './Archetypes';
import getRandomInt from './utils';

const a = new Character('Abu');

console.log(a.race, a.archetype);

const b = new Character(
  'Aba',
  new Orc('Aba', getRandomInt(1, 10)),
  new Warrior('Aba'),
);

console.log(b.race, b.archetype);