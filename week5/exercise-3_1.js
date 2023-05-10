function isValidNumber(num) {
  let n = parseInt(num);
  if (n != num) {
    console.log("false");
  } else {
    if (0 < n && n < 10) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

isValidNumber(9);
isValidNumber("4");
isValidNumber("abc");
isValidNumber(-5);
isValidNumber(3.5);
isValidNumber(3 / 0);
