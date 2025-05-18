document.getElementById("btn-hitung").addEventListener('click', function() {
  const a = parseFloat(document.getElementById("a").value)
  const t = parseFloat(document.getElementById("t").value)
  const b = parseFloat(document.getElementById("b").value)

  if (isNaN(a) || isNaN(t) || isNaN(b)) {
    alert("Mohon masukkan nilai dengan benar dan lengkap")
    return
  }

  const luas = a * t
  const keliling = 2 * (a + b)

  document.getElementById("luas").textContent = luas
  document.getElementById("keliling").textContent = keliling
})

document.getElementById("btn-reset").addEventListener('click', function() {
  document.getElementById("a").value = ""
  document.getElementById("t").value = ""
  document.getElementById("b").value = ""
  document.getElementById("luas").textContent = "-"
  document.getElementById("keliling").textContent = "-"
})