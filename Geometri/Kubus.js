document.getElementById("btn-hitung").addEventListener('click', function () {
  const s = parseFloat(document.getElementById("s").value)

  if (isNaN(s) || s <= 0) {
    alert("Mohon masukkan nilai yang valid (lebih dari 0)")
  }

  const volume = s * s * s
  const Lp = 6 * s * s

  document.getElementById("volume").textContent = volume
  document.getElementById("Lp").textContent = Lp
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("s").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("Lp").textContent = "-"
})