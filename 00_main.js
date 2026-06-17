// 0. Event loop - why doesn't this do what supposed to?

console.log('1');
setTimeout(() => console.log('2'))
Promise.resolve().then(() => console.log('3'))
console.log('4')

// 