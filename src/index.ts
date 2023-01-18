import { getFreshCopyOfConstructor } from "./lib/getFreshCopyOfConstructor";
import {reset} from "./lib/soSolution";

// Ruin the prototype
// @ts-ignore
Array.prototype.push = function () {
  var that = this;
  // @ts-ignore
  [].forEach.call(arguments, function (argument) {
    that.splice(Math.round(Math.random()*that.length), 0, argument)
  }); return 'Trolololo';
}

// @ts-ignore
const clean = new reset(Array);
const untrusted = Array;

console.log(clean === untrusted);

const result = compare(clean, untrusted);

console.log({result})

console.log({clean, untrusted});

// How many things can they mess with...
function compare(f1: any, f2: any) {
  // You must convert the functions to strings and compare those:
  let f1String = f1.toString();
  let f2String = f2.toString();

  console.log(f1String);
  console.log(f2String);

  return f1.toString() === f2.toString();
}

const commonTypes = ['String', 'Array'];
