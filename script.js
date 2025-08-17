const tg = window.Telegram.WebApp;

document.getElementById('send').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  tg.sendData(JSON.stringify({name}));
});
