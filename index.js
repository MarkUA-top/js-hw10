const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
const say = prompt("Вгадай цифру від 1 до 100")

function resRanNum() {
  const resNum = (guessField === randomNumber);
  console.log(resNum)

  return resNum
}
