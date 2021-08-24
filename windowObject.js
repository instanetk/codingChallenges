console.log(window);

window.resizeTo(500, 200);

function boundedRatio(a, l, r) {
  let b = [];

  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < 10000; k++) {
      if ((i + i) * k === a[i]) {
        return true;
      } else {
        console.log((i + i) * k);
        return false;
      }
    }
  }
  return b;
}

console.log(boundedRatio([8, 5, 6, 16, 5], 1, 3));
// false, false, true,
