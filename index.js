

// const loaf = {
//   flour: 300,
//   water: 210,
// };

// console.log(loaf.flour);
// console.log(loaf.water);

// loaf.hydration = function(){
//  return this.water/this.flour * 100;
// }

// console.log(loaf.hydration());


// const object = {
//   foo: 'yes',
//   bar: 'no',
//   fum: 'yay',
//   quux: 'boo',
//   spam: 100,
// };

// for (const duh in object) {
//   console.log( `${duh} : ${object[duh]}`);
// };

const object = {
  meals: ['beakfast',
    'second breakfast',
    'elevenses',
    'lunch',
    'afternoon tea',
    'dinner',
    'supper'
  ]
};

// console.log(object.meals[3]);

const array = [
  {
    name: 'Joe',
    jobTitle: 'President',
  },
  {
    name: 'Sharon',
    jobTitle: 'Racecar Driver',
  },
  {
    name: 'Shelia',
    jobTitle: 'crocidile hunter',
  }
];

// array.forEach(obj => console.log(`${obj.name}: ${obj.jobTitle}`));

array[1].boss = 'Joe';
array[2].boss = 'Sharon';

// array.forEach(obj => console.log(`${obj.jobTitle} ${obj.name} ${obj.boss ? `reports to ${obj.boss}` : 'doesn\'t report to anybody'}`));


// function decoder(strg) {
//   const array = strg.toLowerCase().split(' ');
//   let results = '';
//   for (let i = 0; i < array.length; i++) {
//     const letter = array[i].charAt(0);
//     if (letter >= 'e') {
//       results += ' ';
//     } if (letter === 'a') {
//       results += array[i].charAt(1);
//     } if (letter === 'b') {
//       results += array[i].charAt(2);
//     } if (letter === 'c') {
//       results += array[i].charAt(3);
//     } if (letter === 'd') {
//       results += array[i].charAt(4);
//     }
//   }
//   console.log(results);
// }

// let str = 'craft block argon meter bells brown croon droop';
// // let str2 = 'Here Doggo Indiana Jones Woof Woof Apple Banana Cool';
// decoder(str);

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};

function decoder(word) {
  const index = cipher[`${word.charAt(0)}`];
  if (index === undefined) {
    return ' ';
  } else {
    return word.charAt(index - 1);
  }
}

function decodeWords(sentence) {
  const codeArray = sentence.toLowerCase().split(' ');
  let results = '';
  codeArray.forEach(word => {
    const letter = decoder(word);
    results += letter;
  });
  console.log(results);
}

// decodeWords('craft block Argon meter Bells brown crOon droop');


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function () {
      console.log(`${this.name} is a ${this.race} from ${origin}.`);
    },
    evaluateFight: function (character) {
      console.log(`Your opponent takes ${this.attack - character.defense > 0 ? this.attack - character.defense : 0} damage and you recieve ${character.attack - this.defense > 0 ? character.attack - this.defense : 0} damage`);

    },
  };
}

const arrayLOTR = [
  createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'Bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'Frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'Legolas', 'Elf', 'Woodland Realm', 8, 5),
];

// arrayLOTR[0].evaluateFight(arrayLOTR[1]);
// arrayLOTR[3].describe();
// arrayLOTR[3].evaluateFight(arrayLOTR[4]);

arrayLOTR.push(createCharacter('Arwen Undomiel', 'Arwen', 'Half-Elf', 'Rivendell', 8, 8));

// console.log(arrayLOTR);

const newHobbitArray = arrayLOTR.filter(obj => obj.race === 'Hobbit');
// console.log(newHobbitArray);

const strongArray = arrayLOTR.filter(obj => obj.attack > 5);


// arrayLOTR.forEach(char => {
//   char.weapon;
//   char.describe
// })

const newWeapons = {
  'Gandalf': 'a wizard staff',
  'Bilbo': 'the Ring',
  'Frodo': 'a String and Barrow Blade',
  'Aragorn': 'Anduril',
  'Legolas': 'a Bow and Arrow',
  'Arwen': 'Hadhafang',
};


for (let i = 0; i < arrayLOTR.length; i++) {
  let weapon = newWeapons[arrayLOTR[i]['nickname']];
  arrayLOTR[i]['weaponName'] = weapon;
  arrayLOTR[i]['describe'] = function () {
    console.log(`${this.name} is a ${this.race} of ${this.origin} who uses ${this.weaponName}.`);
  };
  // arrayLOTR[i].describe();
}


// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];


// function findOne(arr, query) {
//   const keys = Object.keys(query);
//   let result = null;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][keys[0]] === query[keys[0]]) {
//       result = arr[i];
//       break;
//     }
//   }
//   for (let j = 0; j < keys.length; j++) {
//     if (result !== null) {
//       if (!result.hasOwnProperty(keys[j])) {
//         result = null;
//       }
//     }
//   }
//   for (let i = 0; i < keys.length; i++) {
//     if (result !== null) {
//       if (result[keys[i]] !== query[keys[i]]) {
//         result = null;
//       }
//     }
//   }
//   return result;
// }


// console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));


const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function (query) {
    const keys = Object.keys(query);
    let result = null;
    const arr = this.store.heroes
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][keys[0]] === query[keys[0]]) {
        result = arr[i];
        break;
      }
    }
    for (let j = 0; j < keys.length; j++) {
      if (result !== null) {
        if (!result.hasOwnProperty(keys[j])) {
          result = null;
        }
      }
    }
    for (let i = 0; i < keys.length; i++) {
      if (result !== null) {
        if (result[keys[i]] !== query[keys[i]]) {
          result = null;
        }
      }
    }
    console.log(result);
  },
};

Database.findOne({ id: 5, squad: 'Justice League' });