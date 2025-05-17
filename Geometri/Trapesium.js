document.getElementById("btn-hitung").addEventListener('click', function () {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const t = parseFloat(document.getElementById("t").value);
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(t)) {
    alert("Mohon masukkan nilai yang benar dan lengkap")
    return;
  }

  const luas = 1/2 * (a + b) * t
  const keliling = a + b + c + d

  document.getElementById("luas").textContent = luas;
  document.getElementById("keliling").textContent = keliling;
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("t").value = "";
  document.getElementById("c").value = "";
  document.getElementById("d").value = "";
  document.getElementById("luas").textContent = "-";
  document.getElementById("keliling").textContent = "-";
})