const numbers = document.querySelectorAll(".same");
const result = document.querySelector(".result");
const Presult = document.querySelector(".prevres");
const equal = document.querySelector(".equal");
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const multi = document.querySelector(".multi");
const divid = document.querySelector(".divid");
const tavan = document.querySelector(".tavan");
const radic = document.querySelector(".radic");
const per = document.querySelector(".perc");

const state = {
  firstNumber: "",
  secondNumber: "",
  result: "",
  operator: "",
};

const shownum = () => {
  if (state.operator === "") {
    result.textContent = state.firstNumber;
  } else {
    result.textContent = state.secondNumber;
  }
};

numbers.forEach((el) => {
  el.addEventListener("click", () => {
    if (state.firstNumber === "" && state.operator === "") {
      // state.firstNumber += el.textContent;
      result.textContent += el.textContent;
    }
    if (state.operator && state.firstNumber) {
      state.secondNumber += el.textContent;
    } else {
      state.firstNumber += el.textContent;
    }
    shownum();
  });
});

function addfunction() {
  state.operator = "+";
  Presult.textContent = state.firstNumber + " + " + state.secondNumber + " = ";
  const sum = Number(state.firstNumber) + Number(state.secondNumber);
  state.firstNumber = sum;
  // result.textContent = state.secondNumber;
  result.textContent = state.firstNumber;
}

add.addEventListener("click", () => {
  state.operator = "+";
  const sum = Number(state.firstNumber) + Number(state.secondNumber);
  if (state.firstNumber && !state.secondNumber) {
    Presult.textContent = state.firstNumber + " + ";
    result.textContent = state.firstNumber;
    return;
  } else {
    Presult.textContent = state.firstNumber + " + ";
    state.secondNumber = result.textContent;
    state.secondNumber = "";
    state.firstNumber = sum;
    // result.textContent = state.firstNumber;
  }
});

function menhafunction() {
  state.operator = "-";
  Presult.textContent = state.firstNumber + " - " + state.secondNumber + " = ";
  const menha = Number(state.firstNumber) - Number(state.secondNumber);
  state.firstNumber = menha;
  // result.textContent = state.secondNumber;
  result.textContent = state.firstNumber;
}

minus.addEventListener("click", () => {
  state.operator = "-";
  const minus = Number(state.firstNumber) - Number(state.secondNumber);
  if (state.firstNumber && !state.secondNumber) {
    Presult.textContent = state.firstNumber + " - ";
    result.textContent = state.firstNumber;
    return;
  } else {
    state.secondNumber = "";
    Presult.textContent = state.firstNumber + " - ";
    result.textContent = state.firstNumber;
    state.firstNumber = minus;
  }
});

function multifunction() {
  state.operator = "X";
  Presult.textContent = state.firstNumber + " x " + state.secondNumber + " = ";
  const zarb = Number(state.firstNumber) * Number(state.secondNumber);
  state.firstNumber = zarb;
  // result.textContent = state.secondNumber;
  result.textContent = state.firstNumber;
}

multi.addEventListener("click", () => {
  state.operator = "X";
  const multi = Number(state.firstNumber) * Number(state.secondNumber);
  if (state.firstNumber && !state.secondNumber) {
    Presult.textContent = state.firstNumber + " x ";
    result.textContent = state.firstNumber;
    return;
  } else {
    state.firstNumber = multi;
    state.secondNumber = "";
    Presult.textContent = state.firstNumber + " x ";
    result.textContent = state.firstNumber;
  }
});

function dividfunction() {
  state.operator = "/";
  Presult.textContent = state.firstNumber + " / " + state.secondNumber + " = ";
  const taghsim = Number(state.firstNumber) / Number(state.secondNumber);
  state.firstNumber = taghsim;
  // result.textContent = state.secondNumber;
  result.textContent = state.firstNumber;
}

divid.addEventListener("click", () => {
  state.operator = "/";
  if (state.firstNumber && !state.secondNumber) {
    Presult.textContent = state.firstNumber + "/";
    result.textContent = state.firstNumber;
    return;
  } else {
    const divid = Number(state.firstNumber) / Number(state.secondNumber);
    state.secondNumber = "";
    Presult.textContent = state.firstNumber + "/";
    result.textContent = state.firstNumber;
    state.firstNumber = divid;
  }
});

tavan.addEventListener("click", () => {
  state.operator = "t2";
  Presult.textContent = "sqr(" + state.firstNumber + ")";
  // Presult.textContent = "sqr(";
  // Presult.textContent += state.firstNumber;
  // Presult.textContent += ")";
  const t2 = Number(state.firstNumber) * Number(state.firstNumber);
  state.firstNumber = t2;
  result.textContent = state.firstNumber;
});

radic.addEventListener("click", () => {
  state.operator = "rad";
  Presult.textContent = "rad" + state.firstNumber;
  const rad = Math.sqrt(Number(state.firstNumber));
  state.firstNumber = rad;
  result.textContent = state.firstNumber;
});

per.addEventListener("click", () => {
  if (state.firstNumber && !state.secondNumber) {
    result.textContent = "0";
    Presult.textContent = "0";
    return;
  }
  switch (state.operator) {
    case "+":
      state.secondNumber = result.textContent;
      const per =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = per;
      Presult.textContent = state.firstNumber + " + " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "+";
      break;
    case "-":
      state.secondNumber = result.textContent;
      const perm =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = perm;
      Presult.textContent = state.firstNumber + " + " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "-";
      break;
    case "X":
      state.secondNumber = result.textContent;
      const perx =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = perx;
      Presult.textContent = state.firstNumber + " + " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "X";
      break;
    case "/":
      state.secondNumber = result.textContent;
      const pert =
        (Number(state.firstNumber) * Number(state.secondNumber)) / 100;
      state.secondNumber = pert;
      Presult.textContent = state.firstNumber + " + " + state.secondNumber;
      result.textContent = state.secondNumber;
      state.operator = "/";
      break;
  }
});

equal.addEventListener("click", () => {
  switch (state.operator) {
    case "+":
      addfunction();
      break;
    case "-":
      menhafunction();
      break;
    case "X":
      multifunction();
      break;
    case "/":
      dividfunction();
      break;
  }
});
