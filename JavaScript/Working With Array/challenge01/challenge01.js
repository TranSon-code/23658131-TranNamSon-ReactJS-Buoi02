const checkDogs = function (dogsJulia, dogsKate) {
    
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const allDogs = dogsJuliaCorrected.concat(dogsKate);

  allDogs.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

console.log('--- Data 1 ---');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log('--- Data 2 ---');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);