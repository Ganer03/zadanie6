function valid(form) {
    var otvet=false;
    var kol=form.kolvo.value;
    var result=document.getElementById("result");
    var kolvo_ok=/[0-9]/;
    if (kolvo_ok.test(kol)==false) {
        otvet="Неправильно введено количество товара!";
    }
    let s = document.getElementsByName("selection");
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
    
    let checkDiv = document.getElementById("check1");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");
    let checkboxes = document.querySelectorAll("#check1 input");
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
        selections : [500, 3000, 700],
        radioButs: {
            val1 : 88000,
            val2 : 100000,
            val3 : 140000,
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
        let r = event.target;
        console.log(r.value);
        updatePrice(document.getElementById("form1"));
      });
    });
    let checkboxes = document.querySelectorAll("#check1 input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice(document.getElementById("form1"));
      });
    });
    updatePrice(document.getElementById("form1"));
  });

function ready() {
    console.log("DOM is ready");
}
document.addEventListener("DOMContentLoaded",ready);
