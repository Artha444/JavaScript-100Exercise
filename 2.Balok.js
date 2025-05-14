const panjang = document.getElementById('p')
const lebar = document.getElementById('l')
const tinggi = document.getElementById('t')
const btnHitung = document.getElementById('btn-hitung')
const volume = document.getElementById('volume')
const luas = document.getElementById('luas')
const keliling = document.getElementById('keliling')

function hitungVolume (p, l, t) {
  return p * l * t
}
function hitungLuas (p, l, t) {
  return 2 * (p * l + p * t + l * t)
}

btnHitung.addEventListener('click', function () {
  volume.textContent = hitungVolume(panjang.value, lebar.value, tinggi.value)
  luas.textContent = hitungLuas(panjang.value, lebar.value, tinggi.value)
  let hitungKeliling = parseInt(panjang.value) (lebar.value)(tinggi.value)
  keliling.textContent = hitungKeliling
})