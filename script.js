function valid(form) {
    var otvet=false;
    var price=form.price.value;
    var kol=form.kolvo.value;
    var result=document.getElementById("result");
    var price_ok=/[0-9.]/;
    var amount_ok=/[0-9]/;
    if (price_ok.test(price)==false || price<0) {
        otvet="Неправильно введена цена товара!";
    }
    else if (amount_ok.test(kol)==false || kol<0) {
        otvet="Неправильно введено количество товара!";
    }
    if (otvet) {
        alert(otvet);
        if(result!="")
            result.innerHTML="";
    }
    else {
        result.innerHTML="Стоимость заказа:"+price*kol+" "+"рублей.";
    }
    return false;
}

function ready() {
    console.log("DOM is ready");
}

document.addEventListener("DOMContentLoaded",ready);
