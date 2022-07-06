/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function isBareObject(o) {
  return (o instanceof Object && o.constructor === Object);
}

export class Sequence {
  #list;
  #alphabet;
  constructor(symbolClass) {
    this.#list = [];
    this.#alphabet = symbolClass;
  }
  get length() {
    return this.#list;
  }
  get [Symbol.iterator]() {
    return this.#list[Symbol.iterator];
  }
  static get [Symbol.species]() {
    return this;
  }
  // Takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
  at(args) {
    let index;
    if (typeof args === "Number") {
      index = args;
    } else if (isBareObject(args)) {
      if (typeof args.index !== "Number") {
        throw new Error("Invalid Arguments");
      }
      index = args.index;
    } else {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(index))) {
      throw new Error("Invalid Arguments: Index must be an integer");
    }
    return this.#list.at(index);
  }
  concat(args) {
    if (!(Array.isArray(args))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.concat(...args);
  }
  copyWithin(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("target"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.target !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.target))) {
      throw new Error("Invalid Arguments: Target must be an integer");
    }
    if (!(args.hasOwnProperty("start"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.start !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.start))) {
      throw new Error("Invalid Arguments: Start must be an integer");
    }
    if (!(args.hasOwnProperty("end"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.end !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.end))) {
      throw new Error("Invalid Arguments: End must be an integer");
    }
    return this.#list.copyWithin(args.target, args.start, args.end);
  }
  every(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.every(args.callbackFn, args.thisArg);
  }
  fill(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("value"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(this.#alphabet.isValid(args.value))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("start"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.start !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.start))) {
      throw new Error("Invalid Arguments: Start must be an integer");
    }
    if (!(args.hasOwnProperty("end"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.end !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.end))) {
      throw new Error("Invalid Arguments: End must be an integer");
    }
    return this.#list.fill(args.value, args.start, args.end);
  }
  filter(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.filter(args.callbackFn, args.thisArg);
  }
  find(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.find(args.callbackFn, args.thisArg);
  }
  findIndex(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.findIndex(args.callbackFn, args.thisArg);
  }
  forEach(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.forEach(args.callbackFn, args.thisArg);
  }
  static from(args) {
    return Array.from(args);
  }
  includes(args) {
    // TODO: allow searching on full sequences
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("searchElement"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(this.#alphabet.isValid(args.searchElement))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("fromIndex"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.fromIndex !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.fromIndex))) {
      throw new Error("Invalid Arguments: fromIndex must be an integer");
    }
    return this.#list.includes(args.searchElement, args.fromIndex);
  }
  indexOf(args) {
    // TODO: allow searching on full sequences
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("searchElement"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(this.#alphabet.isValid(args.searchElement))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("fromIndex"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.fromIndex !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.fromIndex))) {
      throw new Error("Invalid Arguments: fromIndex must be an integer");
    }
    return this.#list.indexOf(args.searchElement, args.fromIndex);
  }
  lastIndexOf(args) {
    // TODO: allow searching on full sequences
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("searchElement"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(this.#alphabet.isValid(args.searchElement))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("fromIndex"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.fromIndex !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.fromIndex))) {
      throw new Error("Invalid Arguments: fromIndex must be an integer");
    }
    return this.#list.lastIndexOf(args.searchElement, args.fromIndex);
  }
  map(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.map(args.callbackFn, args.thisArg);
  }
  pop() {
    return this.#list.pop();
  }
  push(args) {
    if (Array.isArray(args)) {
      push_elements(args);
    } else if (isBareObject(args)) {
      if (!(args.hasOwnProperty("element"))) {
        push_element(args.element);
      } else if (!(args.hasOwnProperty("elements"))) {
        push_elements(args.elements);
      } else {
        throw new Error("Invalid Arguments");
      }
    } else {
      push_element(args);
    }
    function push_elements(elements) {
      for (const element of elements) {
        if (!(this.#alphabet.isValid(element))) {
          throw new Error("Invalid Arguments");
        }
      }
      return this.#list.push(...elements);
    }
    function push_element(element) {
      if (!(this.#alphabet.isValid(element))) {
        throw new Error("Invalid Arguments");
      }
      return this.#list.push(element);
    }
  }
  reduceFromStart(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.reduce(args);
  }
  reduceFromEnd(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.reduceRight(args);
  }
  reverse() {
    return this.#list.reverse();
  }
  shift() {
    return this.#list.shift();
  }
  slice(args) {
    if (!(args.hasOwnProperty("start"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.start !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.start))) {
      throw new Error("Invalid Arguments: start must be an integer");
    }
    if (!(args.hasOwnProperty("end"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.end !== "Number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.end))) {
      throw new Error("Invalid Arguments: end must be an integer");
    }
    return this.#list.slice(args.start, args.end);
  }
  some(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("callbackFn"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.callbackFn !== "function") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("thisArg"))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.some(args);
  }
  splice(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("start"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.start !== "number") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("deleteCount"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.deleteCount !== "number") {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("items"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(Array.isArray(args.items))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.splice(args.start, args.deleteCount, ...args.items);
  }
//  toLocaleString(args): dubious usefulness
  toString(args) {
    return this.#list.toString(args);
  }
  unshift(args) {
    if (Array.isArray(args)) {
      push_elements(args);
    } else if (isBareObject(args)) {
      if (!(args.hasOwnProperty("element"))) {
        push_element(args.element);
      } else if (!(args.hasOwnProperty("elements"))) {
        push_elements(args.elements);
      } else {
        throw new Error("Invalid Arguments");
      }
    } else {
      push_element(args);
    }
    function push_elements(elements) {
      for (const element of elements) {
        if (!(this.#alphabet.isValid(element))) {
          throw new Error("Invalid Arguments");
        }
      }
      return this.#list.unshift(...elements);
    }
    function push_element(element) {
      if (!(this.#alphabet.isValid(element))) {
        throw new Error("Invalid Arguments");
      }
      return this.#list.unshift(element);
    }
  }
  toArray() {
    return this.#list;
  }


  isSubsequence(args) {
    args.index
    args.
  }
  endsWith(args) {
  }
//  localeCompare(args): dubious usefulness
//  match(args): requires regex
//  matchAll(args): requires regex
//  normalize(args): only applies to Unicode strings
  padEnd(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("targetLength"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.targetLength !== "number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.targetLength))) {
      throw new Error("Invalid Arguments: targetLength must be an integer");
    }
    if (!(args.hasOwnProperty("padElement"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(this.#list.isValid(args.padElement))) {
      throw new Error("Invalid Arguments");
    }
    return Array(targetLength).fill(args.padElement).concat(this.#list).slice(-(Math.max(args.targetLength, this.#list.length)));
  }
  padStart(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("targetLength"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.targetLength !== "number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.targetLength))) {
      throw new Error("Invalid Arguments: targetLength must be an integer");
    }
    if (!(args.hasOwnProperty("padElement"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(this.#list.isValid(args.padElement))) {
      throw new Error("Invalid Arguments");
    }
    return this.#list.concat(Array(targetLength).fill(args.padElement)).slice(-(Math.max(args.targetLength, this.#list.length)));
  }
  repeat(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("count"))) {
      throw new Error("Invalid Arguments");
    }
    if (typeof args.count !== "number") {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(args.count))) {
      throw new Error("Invalid Arguments: count must be an integer");
    }
    return Array(args.count).fill(this.#list).flat(1);
  }
  replace(args) {
    if (!(isBareObject(args))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.hasOwnProperty("findSequence"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.findSequence instanceof Sequence)) {
      throw new Error("Invalid Arguments: findSequence must be an Sequence");
    }
    if (!(args.hasOwnProperty("newSequence"))) {
      throw new Error("Invalid Arguments");
    }
    if (!(args.newSequence instanceof Sequence)) {
      throw new Error("Invalid Arguments: newSequence must be an Sequence");
    }
    let newSequenceIterator = newSequence[Symbol.iterator]();
    let thisIterator = this.#list[Symbol.iterator]();
    while (!thisIterator.done) {
      if (newSequenceIterator.value === thisIterator.value) {
        newSequenceIterator = newSequenceIterator.next();
      }
      if (newSequenceIterator.done) {
        // Sequence Found!
        newSequenceIterator = newSequence[Symbol.iterator]();
      }
      thisIterator = thisIterator.next();
    }
  }
  replaceAll(args) {
    // sequence:substr
    // sequence:newSubstr
  }
//  search(args): requires regex
  split(args) {
    // return: 
  }
  startsWith(args) {
  }
//  toLocaleLowerCase(args): dubious usefulness
//  toLocaleUpperCase(args)
  toLowerCase(args) {
  }
  toString() {
  }
  toUpperCase(args) {
  }
  trim(args) {
  }
  trimEnd(args) {
  }
  trimStart(args) {
  }
  valueOf() {
  }
}

export class UnicodeCodePoint {
  #str;
  constructor(args) {
    let value;
    if (typeof args === "number") {
      value = args;
    } else if (isBareObject(args)) {
      if (!(args.hasOwnProperty("value"))) {
        throw new Error("Invalid Arguments");
      }
      if (typeof args.value !== "number") {
        throw new Error("Invalid Arguments: value must be a number");
      }
      value = args.value;
    } else {
      throw new Error("Invalid Arguments");
    }
    if (!(Number.isInteger(value))) {
      throw new Error("Invalid Arguments: value must be an integer");
    }
    if (value < 0 || value > 0x10FFFF) {
      throw new Error("Invalid Arguments: value must be between 0 and 0x10FFFF");
    }
    #str = String.fromCodePoint(value);
  }
  toString() {
    return this.#str;
  }
  static isEqual(args, arg2) {
    return (args.#str === arg2.#str);
  }
}
