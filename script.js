let prices = {
    selections : [800, 88000, 20000],
    radioboxes: {
        v1 : 0,
        v2 : 22000,
        v3 : 52000,
    },
    checks: {
        check1 : 3000,
        check2 : 10000,
        check3 : 3500,
    }
};

function get_price(){
  let kolvo=document.querySelector("form#form1 > input[name=kolvo]").value;
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
        elements = document.querySelectorAll("div.checkbox > label > input:checked");
        elements.forEach(function(element) {
          console.log(element.name);
          price += prices.checks[element.name];
        });
        break;
      default:
        break;
    }
    return price*parseInt(kolvo);
  }
}

function updatePrice() {
  let result = document.querySelector("div#result");
  result.innerHTML = "Стоимость заказа:"+get_price()+" "+"рублей.";
}

function updateView(){
  let selector = document.querySelector("select[name=fieldname3]");
  console.log("update view");
  console.log(selector.value);
  switch (parseInt(selector.value)) {
    case 2:
      document.querySelector("div.checkbox").style.display = "none";
      document.querySelectorAll("input[name=check1]").checked = false;

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
      document.querySelectorAll("input[name=check1]").checked = false;
  }
}


console.log("DOM is ready");

let selector = document.querySelector("select[name=fieldname3]");
updateView();
selector.addEventListener("change", updateView);
