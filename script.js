
const button = document.getElementById('btn');
const inputRange = document.getElementById('range');
let rangeSpan = document.getElementById('range-span');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const eBtn = document.getElementById('e_btn');

button.addEventListener('click', function () {
    square.style.backgroundColor = inputText.value;
});

eBtn.style.display = "none";

rangeSpan.textContent = '50%';

let rangeChange = function(event) {
  rangeSpan.textContent = event.target.value + "%";
  circle.style.width = event.target.value + "%";
  circle.style.height = event.target.value + "%";
};

inputRange.addEventListener('input', rangeChange);


