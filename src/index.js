module.exports = function solveEquation(equation) {
  let a, b, c, x1, x2;
  let num = equation.split(' ');
  
  a = +num[0];
  b = +num[4];
  c = +num[8];

  if (num[3] == '-') {
    b *= -1;
  }
  
  if (num[7] == '-') {
    c *= -1;
  }

  let d = Math.pow(-b, 2) - 4 * a * c;
  
  x1 = Math.round((-b + Math.pow(d, 0.5)) / (2 * a));
  x2 = Math.round((-b - Math.pow(d, 0.5)) / (2 * a)); 

  return x1 > x2 ? [x2, x1] : [x1, x2];

}