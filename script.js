document.getElementById('fake-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  const status = document.getElementById('status');
  const fill = document.querySelector('.fill');
  status.style.display = 'block';

  let percent = 0;
  const interval = setInterval(() => {
    percent += 5;
    fill.style.width = percent + '%';
    if (percent >= 100) {
      clearInterval(interval);
      status.style.display = 'none';
      document.getElementById('hacked').style.display = 'block';
    }
  }, 200);
});
