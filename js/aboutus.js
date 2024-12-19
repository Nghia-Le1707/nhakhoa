
const borderimg = document.getElementById('border-img-s7-au');
const imgs7au = document.getElementById('backgr-img-fullscreen');
const btnclose = document.getElementById('btn-close-au');

if (borderimg && imgs7au && btnclose) {
  borderimg.onclick = function() {
    imgs7au.style.display = 'block';
  };
  btnclose.onclick = function() {
    imgs7au.style.display = 'none';
  };
}