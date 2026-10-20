const pets = ["cat","dog","snake","bird","mouse"]

for (let i = 0; i < pets.length; i++) {
    if(i%2 !== 0){
      const capitalizedLetter = pets[i][0].toUpperCase();
      const word = pets[i].substring(1, pets[i].length);
      console.log(`${capitalizedLetter}${word}`);
    }
    else {
      console.log(pets[i])
    }
}

let test = 'This is a test';// --> ['T', 'h','i',.....]
test = 'this is a test';
console.log(test)