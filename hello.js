document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('demo').style.display = 'block';
  document.getElementById('btn').style.display = 'none';
  document.getElementById('demo').classList.add('demo');
  document.getElementById('body').style.background = 'url(bg.gif)';
  document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  document.getElementById('body').style.backgroundSize = 'cover';
  document.getElementById('body').style.backgroundPosition = 'center';
  document.getElementById('audio').play();
  setTimeout(() => {
    document.getElementById('demo').classList.remove('demo');
  }, 5000);
  setTimeout(() => {
    document.getElementById('demo').style.display = 'none';
    document.getElementById('btn').style.display = 'block';
    document.getElementById('demo').classList.remove('demo');
    document.getElementById('body').style.background = 'url(bgBirthday.jpg)';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
    document.getElementById('body').style.backgroundSize = 'cover';
  }, 23000);
});
