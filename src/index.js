module.exports = function reverse (n) {
  const reversNumber = String(n).split('').reverse().join('');
  const reversMinusNumber = reversNumber.slice(0,-1);  

    if(n >= 0) {
        return Number(reversNumber);
    } else {
        return Number(reversMinusNumber);
    };
}
