const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");
const counterValEl = document.querySelector(".counter__value");

const plusBtn = document.querySelector(".counter__btn-plus");
const minusBtn = document.querySelector(".counter__btn-minus");
const resetBtn = document.querySelector(".counter__reset-btn");

function incrementVal() {
  const currentVal = parseInt(counterValEl.textContent);
  let newVal = currentVal + 1;
  if (newVal > 5) {
    newVal = 5;
    counterEl.classList.add("counter-limit");
    counterTitleEl.textContent = "Limit Reached! Buy PRO Version for > 5";
    plusBtn.disabled = true;
    minusBtn.disabled = true;
  }
  counterValEl.textContent = newVal;
}

plusBtn.addEventListener("click", incrementVal);

minusBtn.addEventListener("click", function () {
  const currentVal = parseInt(counterValEl.textContent);
  let newVal = currentVal - 1;
  if (newVal < 0) newVal = 0;
  counterValEl.textContent = newVal;
});

resetBtn.addEventListener("click", function () {
  counterValEl.textContent = 0;
  counterEl.classList.remove("counter-limit");
  counterTitleEl.textContent = "cool counter";
  plusBtn.disabled = false;
  minusBtn.disabled = false;
});
