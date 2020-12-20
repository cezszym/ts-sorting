import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([105, 4, 12, 0, 4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaDab');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
