'use-strict';

const dog = {
  sound: 'woof',
  talk() {
    return this.sound;
  },
};

dog.talk();

const talkFunction = dog.talk;
// this is now attached to the global variable

console.log(talkFunction());

const boundFunction = talkFunction.bind(dog);
console.log(boundFunction());
