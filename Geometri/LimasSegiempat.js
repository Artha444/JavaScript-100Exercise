document.getElementById("btn-hitung").addEventListener('click', function () {
  const s = parseFloat(document.getElementById("s").value)
  const t = parseFloat(document.getElementById("t").value)
  const ts = parseFloat(document.getElementById("ts").value)

  if (isNaN(s) || isNaN(t) || isNaN(ts)) {
    alert("Mohon masukkan nilai dengan valid")
    return
  }

  const volume = 1/3 * s * s * t
  const lp = s * s + 4 * (1/2 * s * ts)

  document.getElementById("volume").textContent = volume
  document.getElementById("lp").textContent = lp
})

document.getElementById("btn-reset").addEventListener('click',function () {
  document.getElementById("s").value = ""
  document.getElementById("t").value = ""
  document.getElementById("ts").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("lp").textContent = "-"
})