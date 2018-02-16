import * as firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyBzJ5xJqcl8ikI10vG4EOhy-VP4KgUVZIE",
//   authDomain: "expensify-orig.firebaseapp.com",
//   databaseURL: "https://expensify-orig.firebaseio.com",
//   projectId: "expensify-orig",
//   storageBucket: "expensify-orig.appspot.com",
//   messagingSenderId: "503144628460"
// };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Emma',
  age: 29,
  isMarried: true,
  stressLevel: 8,
  job: {
    title: 'English tutor',
    company: 'Eigox'
  },
  location: {
    city: 'Yogyakarta',
    country: 'Indonesia'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('There was an error', e);
});

database.ref('attributes').set({
  height: 173,
  weight: 53
}).then(() => {
  console.log('New attributes saved');
}).catch((e) => {
  console.log('There was an error', e);
});

database.ref('isMarried')
  .remove()
  .then(() => {
    console.log('Data was removed');
  })
  .catch((e) => {
    console.log('Data was not removed due to the following error:', e);
  });

database.ref()
  .update({
    isMarried: null,
    stressLevel: 6,
    'job/company': 'Basecamp',
    'job/title': 'Software developer',
    'location/city': 'San Francisco',
    'location/country': 'USA'
  }).then(() => {
    console.log('Data updated');
  }).catch((e) => {
    console.log('Data could not be updated due to error', e);
  });

const subscription = database.ref()
  .on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
  });

database.ref('expenses').push({
  description: "Satay",
  amount: 150,
  createdAt: 1517616000000,
  note: "1 portion"
});
database.ref('expenses').push({
  description: "Gas",
  amount: 750,
  createdAt: 1517616000000,
  note: "for car"
});
database.ref('expenses').push({
  description: "Bananas",
  amount: 38,
  createdAt: 1517443200000,
  note: ""
});

database.ref('expenses')
  .on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((child) => {
      expenses.push({
      id: child.key,
      ...child.val()
      });
    });

    console.log(expenses);
  });

database.ref('expenses')
  .on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });