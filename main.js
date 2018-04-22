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


// real world example with DOM
const button = document.getElementById('myNiceButton');

button.addEventListener(
  'click',
  dog.talk.bind(dog),
);
