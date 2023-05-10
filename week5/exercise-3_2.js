function getDivisors(num) {
  let lst = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      lst.push(i);
    }
  }
  lst.sort((a, b) => a - b);
  console.log(lst);
}

getDivisors(5);
getDivisors(24);
getDivisors(196);
