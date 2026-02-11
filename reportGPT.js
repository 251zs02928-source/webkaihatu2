const buttonOmikujigpt = document.getElementById("omikujigpt-button");
const resultOmikujigpt = document.getElementById("omikujigpt-result");

const fortunesOmikujigpt = [
  "大吉",
  "中吉",
  "小吉",
  "吉",
  "末吉",
  "凶",
  "大凶"
];

buttonOmikujigpt.addEventListener("click", () => {
  const random = Math.floor(Math.random() * fortunesOmikujigpt.length);
  resultOmikujigpt.textContent = fortunesOmikujigpt[random];
});