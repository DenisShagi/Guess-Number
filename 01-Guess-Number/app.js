const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
  if (tries >= 5) return alert("Игра окончена");
  if (num === secretNum) {
    alert("Вы угадали");
    tries = 5;
  } else {
    alert("Вы не угадали");
    tries++;
  }
}
