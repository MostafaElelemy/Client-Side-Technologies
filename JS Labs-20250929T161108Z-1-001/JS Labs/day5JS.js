
// // 1. Predict (in comments) the output order of this code, then run to verify.
//    console.log(a());
//    var b = function(){ return 'B'; };
//    function a(){ return 'A'; }
//    console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.
//    // Explanation: function declarations are hoisted, 
//     // but function expressions are not initialized until execution.
// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
const add = function(a, b) {
    return a + b;
};
console.log(add(3, 4)); // 7
// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
var factorial = function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1);
};
console.log(factorial(5)); 
// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo() {
    console.log(arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        conso 
showInfo(1, 2); 
showInfo(1, 2, 3, 4, 5); 


    }
}
showInfo();
// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
function mutate(x, y) {
    console.log(arguments[0], arguments[1]);
    arguments[0] = 100;
    arguments[1] = 200;
    console.log(arguments[0], arguments[1]);
}
mutate(1, 2); 
// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            total += arguments[i];
        }
    }
    return total;
}
console.log(sumAll(2, 5, 3)); 
console.log(sumAll()); 
// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll() {
    return Array.prototype.reduce.call(arguments, (total, current) => {
        if (typeof current === 'number') {
            return total + current;
        }
        return total;
    }, 0);
}
// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue(){
    if(args.length===0) return "none";
    if(args.length===1) return "one:"+args[0];
    if(args.length===2)return "two:"+args[0]+","+args[1];
    return "too many";
}
// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
const funcs = [
    n => n+4,
    n => n*2,
    n => n-10
];
let start = 10;
for(const fn of funcs) start = fn(start);
console.log(start);
// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
const makeMultiplier= factor=> n=>n*factor;
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(7));
console.log(triple(7));
// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
const once= fn=>{
    let done = false;
    return (...args)=>{
        if(!done){
            done = true;
            return fn(...args);
        }
    }
}
const testOnce = once((msg)=>{
    console.log(msg);
    return "Done";
});
console.log(testOnce("First"));
// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
const onceMemo= fn=>{
    let done = false;
    let result;
// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.
    return (...args)=>{
        if(!done){
            done = true;
            result = fn(...args);
        }
        return result;
    }
};
// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
const makeAdder = (start) => {
  let total = start;
  return (n) => {
    total += n;
    return total;
  };
};
const addFrom0 = makeAdder(0);
const addFrom10 = makeAdder(10);
console.log(addFrom0(51)); 
console.log(addFrom0(32)); 
console.log(addFrom10(51)); 
console.log(addFrom10(32));
// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).
const memoize1 = (fn) => {
  const cache = {};
  return (x) => {
    if (x in cache) return cache[x];
    return cache[x] = fn(x);
  };
};
const slowSquare = (n) => n * n;
const m1 = memoize1(slowSquare);
console.log(m1(9));
console.log(m1(9));
// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).
const memoizeN = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args.join('|');
    if (key in cache) return cache[key];
    return cache[key] = fn(...args);
  };
};
const add3 = (a, b, c) => a + b + c;
const mN = memoizeN(add3);
console.log(mN(12, 23, 31));
console.log(mN(12, 2, 3));

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
const user = { name : "mostafa",
    sayHi: function() {
        console.log('Hi ' + this.name);
    }
};
// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
user.sayHi.call({ name: 'moastafa' });
user.sayHi.apply({ name: 'elelemy' });
// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
const greeter = {
    greet: function(greeting, sign) {
        console.log(greeting + ' ' + this.name + sign);
    }
};
// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
const greetLara = greeter.greet.bind({ name: 'Lara' });
greetLara('Hello', '!');
greetLara('Hi', '*');
// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
const sayHello = greeter.greet.bind({ name: 'tefa' }, 'Hello');
sayHello('!');
sayHello('*');
// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
const toArrayAndReverse = function() {
    const argsArray = Array.prototype.slice.call(arguments);
    const reversed = argsArray.slice().reverse();
    console.log(reversed);
    return argsArray; 
};
// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
const arr = [5, 2, 11, 7];
console.log(Math.max(...arr)); 
console.log(arr.reduce((max, n) => n > max ? n : max, arr[0])); 
// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
console.log(Math.max.call(null, 5, 2, 11, 7)); 
console.log(Math.max.apply(null, arr)); 
// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
const name = "mostafa";
const age = 30;
console.log(`User: ${name} Age: ${age + 1}`);
// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
const title = " text";
const body = " body.";
console.log(`Title: ${title}
Body: ${body}`);
// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if (true) {
    var i = 1;
    let j = 2;
    console.log(i); 
    console.log(j); 
}
console.log(i); 
// console.log(j) j is not defined
// // 28. Write code that tries to log x before let x = 5;.
// console.log(x);
// let x = 5;
// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
// const arr = [1, 2, 3];
// arr.push(4); 
// // lab.js:237 Uncaught SyntaxError: Identifier 'arr' has already been declared (at lab.js:237:7)
// console.log(arr); 
// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
const squareFull = (n) => { return n * n; };
const squareConcise = (n) => n * n;
const squares = [1, 2, 3].map(n => n * n);
console.log(squares); 
// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).
const timer = {
    count: 0,
    startClassic: function() {
        const self = this;
        setInterval(function() {
            self.count++;
            console.log(self.count);
        }, 1000);
    },
    startArrow: function() {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
const getObject = () => ({ v: 10 });
console.log(getObject()); 
// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
const objWithMethod = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};
// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
const greet = (name) => 'Hi ' + name + '!';
console.log(greet('elelemy')); 
// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const add2 = n => n + 2;
const times3 = n => n * 3;
const minus1 = n => n - 1;
const runPipeline = (n, fnsArray) => {
    return fnsArray.reduce((acc, fn) => fn(acc), n);
};
console.log(runPipeline(5, [add2, times3, minus1])); 
// 36. (write answers BEFORE running):
    var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
    var inc = obj.inc;
    console.log(obj.inc());
    console.log(inc()); 
// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
const counters = [];
for (let i = 0; i < 1000; i++) {
    counters.push((() => {
        let count = 0;
        return () => ++count;
    })());
}
// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
const safeFirst = (...args) => {
    if(args.length === 0) return undefined;
    return args;
};
// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
function factory(namesArray){
    var obj = {};
    for(var name of namesArray){
        var count = 0;
        obj[name] = function(){
            count++;
            return count;
        };
    }
    return obj;
}
var counte = factory(['a','b']);
console.log(counte.a());
console.log(counte.b());
// 40. Write 2 things that were new or tricky today (comment).
//// 1. Hoisting differences between decl vs expr.
//// 2. Arrow function this binding.