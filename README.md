# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kvnkm/lotide`

**Require it:**

`const _ = require('@kvnkm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `countLetters()`: count the number of letters
- `countOnly()`: count the number of time a given input appears in an array
- `findKey()`: find key by object name
- `findKeyByValue()`: find a key in an object given a value from the key/value pair
- `head()`: return first element from array
- `letterPositions()`: return index of given letter from array
- `map()`: performs an operation on each element from array
- `middle()`: return middle, or middle two items from array
- `tail()`: return array except first item
- `takeUntil()`: return items from an array until a condition is met
- `without()`: create new array from origin array without items from secondary array
