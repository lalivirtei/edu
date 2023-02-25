function count(obj) {
  console.log(Object.keys(obj).length)
  return Object.keys(obj).length;
}

count({some: 1, another: 3})