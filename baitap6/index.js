let a = +prompt("moi ban nhap vao so a");
let b = +prompt("moi ban nhap vao so b");
let operator = prompt("moi ban nhap vao cac phep tinh (+, -, *, /)");
if (operator === "+") {
  operator = a + b;
} else if (operator === "-") {
  operator = a - b;
} else if (operator === "*") {
  operator = a * b;
} else if (operator === "/") {
  operator = a / b;
}
alert("ket qua la: " + operator);
