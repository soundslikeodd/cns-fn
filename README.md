# @soundslikeodd/cns-fn

Class name utility.

cns-fn is a completely selfish project.  It eliminates the need for me to write the same function that I've been writing in projects for 10+ years

## Install

A single function is exported from the _@soundslikeodd/cns-fn_ package.  This allows consumers of the package to call it what they will.

```bash
npm install @soundslikeodd/cns-fn
```

## Usage

```javascript
import cnsFn from '@soundslikeodd/cns-fn';

// short circuit
// condition === true -> 'class1 conditional-class'
// condition === false -> 'class1'
const classNames1 = cnsFn('class1', condition && 'conditional-class');

// inline ternary
// condition === true -> 'class1 true-class'
// condition === false -> 'class1 false-class'
const classNames2 = cnsFn('class1', condition ? 'true-class' : 'false-class');

// Optional chaining
// obj.possibleClass exists 'is truthy' -> 'class1 possibleClass value'
// obj.possibleClass does not exists 'is falsey' -> 'class1'
const classNames2 = cnsFn('class1', obj?.possibleClass);
```
