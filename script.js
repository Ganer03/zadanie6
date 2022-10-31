function Price(){
  let kolvo=document.querySelector("input[name=kolvo]").value;
  let kolvo_ok=/^[1-9][0-9]*$/;
  if (kolvo_ok.test(kolvo)==false) {
      alert("Неправильно введено количество товара!");
      return NaN;
  } else {
    let selector = document.querySelector("select[name=fieldname3]");
    let price = prices.selections[parseInt(selector.value) - 1];
    let elements;
    switch (parseInt(selector.value)) {
      case 2:
        elements = document.querySelectorAll("input[name=radiobox]:checked");
        elements.forEach(function(element) {
          price += prices.radioboxes[element.value];
        });
        break;
      case 3:
        elements = document.querySelectorAll("div.checkbox input:checked");
        elements.forEach(function(element) {
          price += prices.checks[element.name];
        });
        break;
      default:
        break;
    }
    return price*parseInt(kolvo);
  }
}

function update() {
  let result = document.querySelector("#rez");
  result.innerHTML = "Стоимость заказа:"+Price()+" "+"рублей.";
}

function update1(){
  let selector = document.querySelector("select[name=fieldname3]");
  switch (parseInt(selector.value)) {
    case 2:
      document.querySelector("div.checkbox").style.display = "none";
      document.querySelectorAll("input[type=checkbox]").checked = false;

      document.querySelector("div.radiobox").style.display = "block";
      document.querySelector("input[name=radiobox]").checked = true;
      break;
    case 3:
      document.querySelector("div.radiobox").style.display = "none";
      document.querySelectorAll("input[name=radiobox]").checked = false;

      document.querySelector("div.checkbox").style.display = "block";
      break;
    default:
      document.querySelector("div.radiobox").style.display = "none";
      document.querySelector("div.checkbox").style.display = "none";
      document.querySelectorAll("input[name=radiobox]").checked = false;
      document.querySelectorAll("input[type=checkbox]").checked = false;
  }
}

let prices = {
    selections : [800, 88000, 20000],
    radioboxes: {
        rd1 : 0,
        rd2 : 22000,
        rd3 : 52000,
    },
    checks: {
        ch1 : 3000,
        ch2 : 10000,
        ch3 : 3500,
    }
};

console.log("DOM is ready");

let selector = document.querySelector("select[name=fieldname3]");
update1();
selector.addEventListener("change", update1);
