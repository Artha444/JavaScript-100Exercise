document.getElementById("btn-hitung").addEventListener('click', function () {
  const a = parseFloat(document.getElementById("a").value)
  const ta = parseFloat(document.getElementById("ta").value)
  const T = parseFloat(document.getElementById("T").value)
  const b = parseFloat(document.getElementById("b").value)
  const c = parseFloat(document.getElementById("c").value)

  if (isNaN(a) || isNaN(ta) || isNaN(T) || isNaN(b) || isNaN(c)) {
    alert("Mohon masukkan nilai dengan valid")
    return
  }

  const volume = (1/2 * a * ta) * T
  const lp = 2 * (1/2 * a * ta) + (a + b + c) * T

  document.getElementById("volume").textContent = volume
  document.getElementById("lp").textContent = lp
})

document.getElementById("btn-reset").addEventListener('click', function () {
  document.getElementById("a").value = ""
  document.getElementById("b").value = ""
  document.getElementById("c").value = ""
  document.getElementById("ta").value = ""
  document.getElementById("T").value = ""
  document.getElementById("volume").textContent = "-"
  document.getElementById("lp").textContent = "-"
})