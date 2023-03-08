let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date));        // нужно вывести "ВТ"

function getWeekDay(date) {
  let ruDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return ruDays[date.getDay()];
}

let date2 = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getLocalDay(date2));       // вторник, нужно показать 2

function getLocalDay(date) {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day;
}