// Задание 2 (тайминг 25 минут)

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

document.getElementById('submitButton').addEventListener('click', ()=> {
  const selectedDrink = document.querySelector('input[name="drink"]:checked');

  if (selectedDrink) {
    const drinkValue = selectedDrink.value;
    if (drinkValue === 'tea') {
      alert('Чай закончился');
    } else if (drinkValue === 'coffee') {
      alert('Кофе закончился');
    }
  } else {
    alert('Пожалуйста, выберите напиток');
  }
});
