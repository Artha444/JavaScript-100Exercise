document.getElementById("btn-hitung").addEventListener('click', function () {
  const s = parseFloat(document.getElementById("s").value);
  
  if (isNaN(s) || s <= 0) {
    alert("Masukkan sisi yang valid (lebih dari 0)")
  }

  const luas = s * s
  const keliling = 4 * s

  document.getElementById("luas").textContent = luas;
  document.getElementById("keliling").textContent = keliling;
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("s").value = "";
  document.getElementById("luas").textContent = "-";
  document.getElementById("keliling").textContent = "-";
})