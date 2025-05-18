document.getElementById("btn-hitung").addEventListener('click', function () {
  const r = parseFloat(document.getElementById("r").value)
  const t = parseFloat(document.getElementById("t").value)
  const s = parseFloat(document.getElementById("s").value)

  if(isNaN(r) || isNaN(t) || isNaN(s)) {
    alert("Mohon masukkan nilai dengan valid")
    return
  }

  const phi = Math.PI
  const volume = 1/3 * phi * r * r * t
  const lp = phi * r * (r + s)

  document.getElementById("volume").textContent = volume.toFixed(2)
  document.getElementById("lp").textContent = lp.toFixed(2)
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("r").value = ""
  document.getElementById("t").value = ""
  document.getElementById("s").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("lp").textContent = "-"
})