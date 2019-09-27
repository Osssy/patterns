//6

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);