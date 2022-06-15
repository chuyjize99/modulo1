const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a year ", function (year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
      console.log('Es bisiesto');
  }
  else{
      console.log('No es bisiesto');
  }
  rl.close();
});