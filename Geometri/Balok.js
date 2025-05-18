document.getElementById("btn-hitung").addEventListener("click", function () {
  const p = parseFloat(document.getElementById("p").value)
  const l = parseFloat(document.getElementById("l").value)
  const t = parseFloat(document.getElementById("t").value)

  if (isNaN(p) || isNaN(l) || isNaN(t)) {
    alert("Mohon masukkan semua nilai panjang, lebar, dan tinggi.");
    return
  }

  const volume = p * l * t
  const luas = 2 * (p * l + p * t + l * t)
  const keliling = 4 * (p + l + t)

  document.getElementById("volume").textContent = volume
  document.getElementById("luas").textContent = luas
  document.getElementById("keliling").textContent = keliling
});

document.getElementById("btn-reset").addEventListener("click", function () {
  document.getElementById("p").value = ""
  document.getElementById("l").value = ""
  document.getElementById("t").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("luas").textContent = "-"
  document.getElementById("keliling").textContent = "-"
});
