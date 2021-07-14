const counter = (function counter() {
  let value = 0;
  return {
    getValue: function () {
      return value;
    },
    changeBy: function (k) {
      value += k;
    },
  };
})();

counter.changeBy(2);
console.log(counter.getValue());

function getFixedCounter(k) {
  let count = Object.create(counter);
  let value = count.getValue();
  let rate = count.changeBy(k);

  return {
    increment: function (rate) {
      value += rate;
    },
    decrement: function (rate) {
      value -= rate;
    },
    getValue: function () {
      return count.getValue();
    },
  };
}

console.log(getFixedCounter().increment(2));
