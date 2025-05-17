document.getElementById("btn-hitung").addEventListener('click', function () {
  const d1 = parseFloat(document.getElementById("d1").value);
  const d2 = parseFloat(document.getElementById("d2").value);
  const a = parseFloat(document.getElementById("d2").value);
  const b = parseFloat(document.getElementById("d2").value);

  if (isNaN(d1) || isNaN(d2)) {
    alert("Mohon masukkan nilai dengan benar dan lengkap")
    return;
  }

  const luas = 1/2 * d1 * d2
  const keliling =  2 * (a + b)

  document.getElementById("luas").textContent = luas;
  document.getElementById("keliling").textContent = keliling;
})

document.getElementById("btn-reset").addEventListener('click', function() {
  document.getElementById("d1").value = "";
  document.getElementById("d2").value = "";
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("luas").textContent = "-";
  document.getElementById("keliling").textContent = "-";
})