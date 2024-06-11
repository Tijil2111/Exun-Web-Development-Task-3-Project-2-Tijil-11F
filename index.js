const express = require("express");
const app = express();
const port = 3000;

function checkPalindrome(number) {
  // i used the function to check palindrome from here https://www.scaler.com/topics/javascript-reverse-number/
  let finalVal = 0;
  if (number >= 0) {
    finalVal = Number(String(number).split("").reverse().join(""));
  } else {
    finalVal = number;
  }

  if (finalVal < 0) {
    return `${number} is a negative number`;
  } else if (finalVal === number) {
    return `${number} is a palindrome`;
  } else {
    return `${number} is not a palindrome`;
  }
}
app.get("/", (req, res) => {
  res.send("Please check url  /numbers");
});
app.get("/numbers", (req, res) => {
  res.send(
    "Please go to /numbers/(type your number without parentheses) to check if your number is a palindrome or not;"
  );
});
app.get("/numbers/:value", (req, res) => {
  const val = Number(req.params.value);
  res.send(checkPalindrome(val));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
