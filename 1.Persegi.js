const sisi = document.getElementById('s')
const luas = document.getElementById('luas')
const keliling = document.getElementById('keliling')
const btnHitung = document.getElementById('btn-hitung')

function hitungLuas(s) {
  return (s * s)
}

function hitungKeliling(s) {
  return (4 * s)
}

btnHitung.addEventListener('click', function () {
  luas.textContent = hitungLuas(sisi.value)
  keliling.textContent = hitungKeliling(sisi.value)
})