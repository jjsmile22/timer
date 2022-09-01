const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const fs = require('fs');


if (myArgs.length === 0) {
  return;
}

const newArray = myArgs.reduce((previousValue, each) => {
if((Number(each)) && (each > -1)) {
  previousValue.push(each);
 
 }
 return previousValue;
}, []);

console.log(newArray);
for (let i = 0; i < newArray.length; i++) {

    setTimeout(() => { process.stdout.write('\x07'); }, newArray[i] * 1000);
};
