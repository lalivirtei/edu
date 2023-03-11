function getSecondsToTomorrow() {
  let now = new Date();
  let tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((tommorow - now) / 1000);
}

console.log(getSecondsToTomorrow());