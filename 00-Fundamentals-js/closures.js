// 00-Fundamentals-js/closures.js 
// They are scope + first-class functions. A closure is a function that has access to its own scope, the outer function's scope, and the global scope.

function makeCounter() {
    let count = 0; // This variable lives in the closure
    return {
        increment: () => ++count,
        value: () => count
    }
}

// Each call to 'makeCounter' creates a separate scope.
// React hooks sue this exact mechanism 'useState' is a clousure around the state.
