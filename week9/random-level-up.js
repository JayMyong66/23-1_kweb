const getRandomBinaryResult = (ratio) => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber < ratio;
};

let temp = 0;
let current = 0;
const nums = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];

const tryLevelUp = () => {
  const interval = setInterval(() => {
    temp++;
    const successed = getRandomBinaryResult(probs[current]);
    if (successed) {
      current++;
      document.getElementById("gauge-bar").style.width = current * 10 + "%";
      document.getElementById("current-level").innerText = current;
    }
    document.getElementById("attempts").innerText = temp;
    if (current >= 10) clearInterval(interval);
  }, 50);
};
