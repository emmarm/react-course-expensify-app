// Object Destructuring

const book = {
  'title': 'Ego is the Enemy',
  'author': 'Ryan Holiday',
  'publisher': {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

// Array Destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName = 'coffee', , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);