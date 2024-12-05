const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)

function checkGuess() {
  const resNum = (guessField === randomNumber);
  console.log(resNum)

  return resNum
}

checkGuess()