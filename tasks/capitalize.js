function capitalize(str) {
  return str.split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ');
}

console.log(capitalize('Lorem ipsum is simply')); // Lorem Ipsum Is Simply
