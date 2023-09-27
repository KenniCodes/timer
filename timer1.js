const timer1 = () => {
// place command line input and slice the first two indexes
// because they are not needed in this function then convert
// input to a number
  const userInput = process.argv.slice(2).map(Number);
// iterate through the arguments passed via command line
  for (let num of userInput) {
// if any number is negative or not a number
// then continue looping
    if (num < 0 || isNaN(num)) {
      continue;
    };
// schedule the function
    setTimeout(() => {
// play sound for each number passed into timer
    process.stdout.write('\x07');
// callback is calculated by multiplying each number by 1000ms
    }, num * 1000);
  };
};
timer1();
