document.getElementById("btn-hitung").addEventListener("click", function () {
  const a = parseFloat(document.getElementById("alas").value);
  const t = parseFloat(document.getElementById("tinggi").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(t) || isNaN(b) || isNaN(c)) {
    alert("Mohon masukkan nilai dengan benar dan lengkap");
    return;
  }

  const luas = 1/2 * a * t
  const keliling = a + b + c

  document.getElementById("luas").textContent = luas;
  document.getElementById("keliling").textContent = keliling;
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("luas").textContent = "-";
  document.getElementById("keliling").textContent = "-";
})