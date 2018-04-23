# This and Bind keyword

`this` and `bind()`  are used together as part of creating and manipulating
objects.


## This

This keyword denotes an object that is not defined by lexical scope. It can be explicitly set to an argument object or implied. It is determined at call time, by the call-site semantics, with some exceptions

### Call-site rules

`this` is determined by the following rules, not allowing for the exceptions.

1. Using the “new” keyword (also known as constructor hijacking) will make “this” use the newly created object as its value.
2. myObject.someFunc(), will use myObject as the `this` object
3. apply and call:
- someFunc.call(this, arg1, arg2,...) invokes the function with explicit this and arguments given as a list
- someFunc.apply(this, [arg1, arg2,...]) invokes the function with explicit this and arguments given as an array.
4. If none of the above is true, then the `this` keyword is set to the global object.

Note this is not similar to lexical scoping.

There are two exceptions as below:

### Exception 1: 'use strict'

If the `use-strict` pragma is used, then when this references the global object, it will return `undefined`. 

### Exception 2: Arrow Functions

Arrow functions cannot be bound to an object with `bind`. They also do not use the semantics above. Instead, they will always use the `this` of the enclosing context. 'use-strict' exception still applies.

## Bind

The `bind` keyword is to be used with a function and some object, to explicitly set the this object. It returns a function which has its this object set from the beginning.

```
const boundfunctionname = functionname.bind(object)
```

Whereever `boundfunctioname` is called, the `this` object will always be the object set by the bind.
