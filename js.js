/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {alert("Наконец-то вы нажали эту кнопку!");
  let q = prompt("Какое у вас настроение от 0 до 10?(если от 7 до ∞, будет рандомная пословица)"); 
  q = Number(q);
  const responses = [
        "От овса кони не рыщут, а от добра добра не ищут.",
        "Шито-крыто, а узелок-то тут.",
        "Попытка — не пытка, а спрос — не беда.",
        "В здоровом теле здоровый дух — редкая удача.",
		"Собаку съел, да хвостом подавился.",
		"Двое третьего ждут, а семеро одного не ждут."
    ];
  if (q >= 7) {alert("Супер! Так держать 🧐 👍👍👍");
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        alert(randomResponse);
  } else {alert("Не нужно переживать, если от -∞ до 6 - то тоже будет 😜)))");
     const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        alert(randomResponse);
  }})