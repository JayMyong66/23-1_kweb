const price = {
  apple: 700,
  orange: 800,
  lemon: 900,
};
let total = 0;
for (const bottonTag of document.getElementsByClassName("add-to-cart")) {
  bottonTag.addEventListener("click", (event) => {
    const item = event.target.parentNode.parentNode.getAttribute("id");
    total += price[item];
    document.getElementById("cost").innerText = total;
  });
}
