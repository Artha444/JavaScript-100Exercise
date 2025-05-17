document.getElementById("btn-hitung").addEventListener("click", function () {
  const r = parseFloat(document.getElementById("r").value);

  if (isNaN(r) || r <= 0) {
    alert("Masukkan jari-jari yang valid (lebih dari 0).");
    return;
  }

  const phi = Math.PI;
  const luas = phi * r * r;
  const keliling = 2 * phi * r;

  document.getElementById("luas").textContent = luas.toFixed(2);
  document.getElementById("keliling").textContent = keliling.toFixed(2);
});

document.getElementById("btn-reset").addEventListener("click", function () {
  document.getElementById("r").value = "";
  document.getElementById("luas").textContent = "-";
  document.getElementById("keliling").textContent = "-";
});
