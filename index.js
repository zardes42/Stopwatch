let time = setInterval(stopWatch, 1000);
let count = 0;
let hr = 0;
let min = 0;

function stopWatch() {
  count = count + 1;

  if (count > 59) {
    min = min + 1;
    count = 0;
  }
  if (min > 59) {
    hr += 1;
    min = 0;
  }
  if (hr === 6) {
    clearInterval(time);
  }
  console.log(`${hr} hr ${min}min ${count}secs`);
}
