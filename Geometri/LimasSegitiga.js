document.getElementById("btn-hitung").addEventListener('click', function () {
  const la = parseFloat(document.getElementById("la").value)
  const t = parseFloat(document.getElementById("t").value)
  const ls = parseFloat(document.getElementById("ls").value)

  if (isNaN(la) || isNaN(t) || isNaN(ls)) {
    alert("Mohon masukkan nilai dengan valid.")
    return
  }

  const volume = 1/3 * la * t
  const lp = la +(3 * ls)

  document.getElementById("volume").textContent = volume.toFixed(2)
  document.getElementById("lp").textContent = lp.toFixed(2)
})

document.getElementById("btn-reset").addEventListener('click',function () {
  document.getElementById("la").value = ""
  document.getElementById("t").value = ""
  document.getElementById("ls").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("lp").textContent = "-"
})