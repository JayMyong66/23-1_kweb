let count = 0;

const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(increase);

counter.innerText = `Counter: ${count}`;

increase.addEventListener("click", () => {
  console.log("+1");
  count += 1;
  counter.innerText = `Counter: ${count}`;
});

decrease.addEventListener("click", () => {
  console.log("-1");
  count -= 1;
  counter.innerText = `Counter: ${count}`;
});
