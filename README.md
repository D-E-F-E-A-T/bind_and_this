# This and Bind keyword

`this` and `bind()`  are used together as part of creating and manipulating
objects.


## This

This keyword denotes an object that is not defined by lexical scope. It can be explicitly set to an argument object or implied. It is determined at call time, by the call-site semantics. If it is not explicitly set, potentially by bind, then it is determined by the following rules.

-
-
-
-

Note this is not like lexical scoping. 


## Bind

The `bind` keyword is to be used with a function and some object, to explicitly set the this object. It returns a function which has its this object set from the beginning.

```
const boundfunctionname = functionname.bind(object)
```

Whereever `boundfunctioname` is called, the `this` object will always be the object set by the bind.
