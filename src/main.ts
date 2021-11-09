let a: string = '1';

// Type Definitions: Function return & parameters
const getFullName = (name: string, surname: string): object => {
  return { name, surname };
};

console.log(getFullName('david', 'quintero'));

// Type Definitions: Object
const user: { name: string; age: number } = {
  name: 'David',
  age: 35,
};

// Type Alisases

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

// Interface

interface UserInterface {
  id: ID;
  name: string;
  age?: number; //? makes field optional
  getName(): string;
}

const user2: UserInterface = {
  name: 'Gabi',
  age: 29,
  getName() {
    return 'Hello' + name;
  },
};

const user3: UserInterface = {
  name: 'Artemis',
  getName() {
    return 'Hello' + name;
  },
};

const popularTags: PopularTag[] = ['happy', 'dragon'];

const dragonTags: MaybePopularTag = 'dragon';
