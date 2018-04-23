'use-strict';

const dog = {
  sound: 'woof',
  talk() {
    return this.sound;
  },
};

dog.talk();

// this is attached to the global variable
const talkFunction = dog.talk;

// there exists no property global.sound, hence undefined
console.log(talkFunction());

// explicitly give the object which will be this when the function is called
const boundFunction = talkFunction.bind(dog);
console.log(boundFunction());


// real world example with DOM if run in browser

// const button = document.getElementById('myNiceButton');

// button.addEventListener(
//   'click',
//   dog.talk.bind(dog),
// );

const talk2 = function (sound) {
  return sound;
};


const talk3 = function () {
  return this.sound;
};

[talk2('wooof!!!!'), talk3('woooof!!!')]
  .map(x => console.log(x));

const boromir = {
  sound: 'so you want to go to mordor',
};

const talkBoundToBoromir = talk3.bind(boromir);

talkBoundToBoromir();
talk3();


const boromir2 = {
  speak: talk3,
  sound: 'so you want to go to mordor',
};

boromir2.speak();

const blabber = boromir2.speak;
blabber();

boromir2.chat = talk3.bind(boromir);

const blabber2 = boromir2.chat;

blabber2();
