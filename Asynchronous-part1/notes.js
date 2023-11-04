// All async functions will be put at the last in the thread

// Now we have to understand every function will ge executed in async way.. 
// Javascript make use of memory area that is basically know as call stack. That is also know stack

// first line: console.log('Before');
// second line: fs.readFile("f1.txt", F1CB);
// third line: fs.readFile("f2.txt", F2CB);
// fourth line: fs.readFile("f3.txt", F3CB);
// fiveth line: console.log('After')

// Every particular function once will comes into call stack if it is callable
// Note: What ever execute in javascript it will execute in call stack...

// https://www.jsv9000.app/

    