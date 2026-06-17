// 00-Fundamentals-js/event-loop.js


console.log('1');
setTimeout(() => console.log('2'))
Promise.resolve().then(() => console.log('3'))
console.log('4')

// Ouput: 1, 4, 3, 2
// Reason: The microtask queue (promises) takes precedence the macrotask queue (setTimeout)


// ________________________ REVIEW CONCEPTS _____________________________
/**
setTimeout -> Sets a timer that executes a function or a piece of code once
Promise.resolve() -> Returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a thenable (i.e., has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.

microtask: A task that is added to the microtask queue and is executed before the next rendering frame. Examples include Promise callbacks, queueMicrotask(), and MutationObserver.
macrotask: A task that is added to the macrotask queue and is executed after the current call stack is empty. Examples include setTimeout, setInterval, and setImmediate.

why does the microtask take priority over a macrotask?

**/


