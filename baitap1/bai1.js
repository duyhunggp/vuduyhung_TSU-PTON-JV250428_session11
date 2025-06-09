let namNhuan = +prompt("nhap vap 1 nam nao do: ");
if (namNhuan % 4 === 0 && namNhuan % 100 !== 0) {
  alert("nam " + namNhuan + " la nam nhuan");
} else if (namNhuan % 100 === 0 || namNhuan % 400 === 0) {
  alert("nam " + namNhuan + " la nam nhuan");
} else {
  alert("nam " + namNhuan + " khong phai nam nhuan");
}
