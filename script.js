const tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Получаем элементы
const nameInput = document.getElementById('name');
const moodSelect = document.getElementById('mood');
const fallbackBtn = document.getElementById('fallbackBtn');

// Функция формирования данных
const getData = () => ({
  name: nameInput.value || "Без имени",
  mood: moodSelect.value,
  time: new Date().toISOString()
});

// Настройка MainButton Telegram
tg.MainButton.setText("📤 Отправить в бота");
tg.MainButton.onClick(() => {
  tg.sendData(JSON.stringify(getData()));
  tg.close();
});
tg.MainButton.show();

// Запасная кнопка для браузера
fallbackBtn.addEventListener('click', () => {
  alert("Открой через Telegram, чтобы отправить данные.\n" +
        JSON.stringify(getData(), null, 2));
});
