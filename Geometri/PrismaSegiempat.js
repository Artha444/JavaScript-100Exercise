document.getElementById("btn-hitung").addEventListener('click', function () {
  const la = parseFloat(document.getElementById("la").value)
  const t = parseFloat(document.getElementById("t").value)
  const ka = parseFloat(document.getElementById("ka").value)

  if (isNaN(la) || isNaN(t) || isNaN(ka)) {
    alert("Mohon masukkan nilai dengan valid.")
    return
  }

  const volume = la * t
  const lp = 2 * la + ka * t

  document.getElementById("volume").textContent = volume.toFixed(2)
  document.getElementById("lp").textContent = lp.toFixed(2)
})

document.getElementById("btn-reset").addEventListener('click',function () {
  document.getElementById("la").value = ""
  document.getElementById("t").value = ""
  document.getElementById("ka").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("lp").textContent = "-"
})