document.getElementById("btn-hitung").addEventListener('click', function () {
  const r = parseFloat(document.getElementById("r").value);
  const t = parseInt(document.getElementById("t").value);

  if (isNaN(r) || isNaN(t)) {
    alert("Mohon masukkan nilai dengan valid")
  }

  const phi = Math.PI
  const volume = phi * r * r * t
  const lp = 2 * phi * r * (r +t)

  document.getElementById("volume").textContent = volume.toFixed(2);
  document.getElementById("lp").textContent = lp.toFixed(2);
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("r").value = "";
  document.getElementById("t").value = "";
  document.getElementById("volume").textContent = "-";
  document.getElementById("lp").textContent = "-";
})