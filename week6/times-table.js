const displayTimes = () => {
  const val = parseInt(document.getElementById("number").value);

  const timesResult = document.getElementById("times-result");

  if (val < 1 || val > 9 || isNaN(val)) return setErrorText(timesResult);

  const result = [];
  for (let i = 1; i <= 9; i++) {
    result.push(val + " X " + i + " = " + val * i);
  }

  timesResult.innerText = result.join("\n");
};

const setErrorText = (t) => (t.innerText = "Input Error!");
