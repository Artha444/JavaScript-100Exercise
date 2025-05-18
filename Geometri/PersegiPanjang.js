document.getElementById("btn-hitung").addEventListener('click', function () {
  const p = parseFloat(document.getElementById("p").value)
  const l = parseFloat(document.getElementById("l").value)

  if (isNaN(p) || isNaN(l)) {
    alert("Masukkan nilai dengan benar dan lengkap")
    return
  }

  const luas = p * l
  const keliling = 2 * (p + l)

  document.getElementById("luas").textContent = luas
  document.getElementById("keliling").textContent = keliling
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("p").value = ""
  document.getElementById("l").value = ""
  document.getElementById("luas").textContent = "-"
  document.getElementById("keliling").textContent = "-"
})