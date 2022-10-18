function valid(form) {
    var otvet=false;
    var kol=form.kolvo.value;
    var result=document.getElementById("result");
    var kolvo_ok=/^[1-9][0-9]*$/;
    if (kolvo_ok.test(kol)==false) {
        otvet="Неправильно введено количество товара!";
    }
    let s = document.getElementsByName("field_name_3");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.selections[priceIndex];
    }
    let radiobox = document.getElementById("radiobox");
    radiobox.style.display = (select.value == "2" ? "block" : "none");
    let radios = document.getElementsByName("radiobox");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.radiobox[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
    
    let checkbox = document.getElementById("checkbox");
    checkbox.style.display = (select.value == "3" ? "block" : "none");
    let checkboxes = document.querySelectorAll("#checkbox input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.checks[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    }); 
    
    if (otvet) {
        alert(otvet);
    }
    else {
        let result = document.getElementById("result");
        result.innerHTML="Стоимость заказа:"+price*kol+" "+"рублей.";
    }
    return false;
}

function getPrice() {
    return {
        selections : [800, 88000, 700],
        radiobox: {
            val1 : 88000,
            val2 : 22000,
            val3 : 52000,
        },
        checks: {
            check1 : 30,
            check2 : 25,
            check3 : 35,
        }
    };
}

window.addEventListener('DOMContentLoaded', function (event) {
    let radiobox = document.getElementById("radiobox");
    radiobox.style.display = "none";
    let s = document.getElementsByName("selection");
    let select = s[0];
    select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice(document.getElementById("form1"));
    });
    let radios = document.getElementsByName("radiobox");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let val = event.target;
        console.log(val.value);
        updatePrice(document.getElementById("form1"));
      });
    });
    let checkboxes = document.querySelectorAll("#checkbox input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let check = event.target;
        console.log(check.name);
        console.log(check.value);
        updatePrice(document.getElementById("form1"));
      });
    });
    updatePrice(document.getElementById("form1"));
  });

function ready() {
    console.log("DOM is ready");
}
document.addEventListener("DOMContentLoaded",ready);
