document.getElementById("btn-hitung").addEventListener("click", function () {
  const r = parseFloat(document.getElementById("r").value)

  if (isNaN(r) || r <= 0) {
    alert("Mohon masukkan nilai dengan valid.");
    return
  }

  const phi = Math.PI
  const volume = 4/3 * phi * r * r * r
  const lp = 4 * phi * r * r

  document.getElementById("volume").textContent = volume.toFixed(2)
  document.getElementById("lp").textContent = lp.toFixed(2)
});

document.getElementById("btn-reset").addEventListener("click", function () {
  document.getElementById("r").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("lp").textContent = "-"
});
