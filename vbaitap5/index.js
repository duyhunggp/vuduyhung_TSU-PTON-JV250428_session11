let weight = parseFloat(prompt("nhap vao can nang cua ban: "));
let height = parseFloat(prompt("nhap vao chieu cao cua ban: "));
let BMI = weight / (height * height);
if (BMI < 18.5) {
  alert("Can nang thap");
} else if (BMI >= 18.5 && BMI < 25) {
  alert("Binh thuong");
} else if (BMI >= 25 && BMI < 30) {
  alert("tien beo phi");
} else if (BMI >= 30 && BMI < 35) {
  alert("beo phi do 1");
} else if (BMI >= 35 && BMI < 40) {
  alert("beo phi do 2");
} else if (BMI >= 40) {
  alert("tien beo phi do 3");
}
