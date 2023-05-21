const setRandomBgColor = () => {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  document.getElementById("color-box").style.backgroundColor =
    "rgb(" + R + "," + G + "," + B + ")";
};
