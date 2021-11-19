"use strict"

// Problem 1 - Write a function that validates if two strings are anagrams.

const isAnagram = (stringA, stringB) => cleanString(stringA) === cleanString(stringB);

// returns string of letter in order i.e. 'State' > 'a,e,s,t,t'
const cleanString = (str) => str.replace(/[^\w]/g).toLowerCase().split('').sort().join();

console.log(`isAnagram("State","Taste") > ${isAnagram("State","Taste")}`) // True
console.log(`isAnagram("Fold","Bold") > ${isAnagram("Fold","Bold")}`) // False



// Problem 2 - Write a function that takes in a given array of objects and returns an array of just names of people over 30.

const people = [
     { name: 'Jon', age: 31 },
     { name: 'Ned', age: 53 },
     { name: 'Brandon', age: 25},
     { name: 'Arya', age: 27},
     { name: 'Sansa', age: 30 },
     { name: 'Robb', age: 32 }
];

// first get array of objects, then destruct to get just names
const names = (dataArray) => dataArray.filter(person => person.age > 30).map(({name}) => name);

console.log(names(people));



// Problem 3 - Find the Hypotenuse

const calcHypotenuse = (a,b) => Math.hypot(a,b);

console.log(calcHypotenuse(3,4));
console.log(calcHypotenuse(10,24));




// Problem 4 - Write a function that takes in three “cards” and returns whether or not they are equal to a “set”.

const cards = [
     {
          "shape": "oval",
          "color": "green",
          "fill": " striped ",
          "number": 3
     },
     {
          "shape": "oval",
          "color": "green",
          "fill": " striped ",
          "number": 3
     },
     {
          "shape": "oval",
          "color": "green",
          "fill": " striped ",
          "number": 3
     }
];

function objectsHaveSameKeys(objects) {
     const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
     const union = new Set(allKeys);

     return (objects.every(object => union.size === Object.keys(object).length || allKeys.length === union.size));
}

console.log(objectsHaveSameKeys(cards));




// Problem 5 - Write a function that takes in two times and returns the number of hours passed between the two times. Param 1 will always be the starting time and Param 2 will be the ending time. If Param 1 = Param 2 please return “no time passed”

function timePassed(valuestart, valuestop){

     //create date format
     const timeStart = new Date("11/19/2021 " + valuestart).getHours();
     const timeEnd = new Date("11/19/2021 " + valuestop).getHours();

     // get difference
     let hourDiff = timeEnd - timeStart;

     // accounts for next day; 1 'hour'; 0 hours
      if (hourDiff < 0) {
         hourDiff = 24 + hourDiff;
      } else if (hourDiff === 1) {
          return (`${hourDiff} hour`);
      }
      else if (hourDiff === 0) {
         return ('no time passed')
      }

     return (`${hourDiff} hours`);

}

console.log(timePassed('2:00 PM','4:00 PM'));
console.log(timePassed('1:00 AM','4:00 PM'));