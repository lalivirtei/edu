function formatDate(date) {
  let now = new Date();
  let secondsPassed = Math.round((now - date) / 1000);
  let message;

  if (secondsPassed < 1) {
    message = 'Прямо сейчас';

  } else if (secondsPassed < 60) {
    message = `${secondsPassed} сек. назад`;

  } else if (secondsPassed < 3600) {
    let minutesPassed = Math.floor(secondsPassed / 60);
    message = `${minutesPassed} мин. назад`;

  } else {
    let formObj = {
      YY: Number(date.getFullYear().toString().slice(2)),
      MM: date.getMonth(),
      DD: date.getDate(),
      HH: date.getHours(),
      mm: date.getMinutes()
    }

    for (let key in formObj) {
      if (formObj[key].toString().length < 2) {
        formObj[key] = '0' + formObj[key];
      }
    }

    message = `${formObj.YY}.${formObj.MM}.${formObj.DD} ${formObj.HH}:${formObj.mm}`;
  }
  return message;
}

let current = new Date();
let currentHourLater = new Date(2023, 2, 4, 10);

console.log(formatDate(current))
console.log(formatDate(currentHourLater))