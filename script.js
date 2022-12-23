let buttonRate = document.getElementsByClassName("rate");
let buttonSubmit = document.getElementById("submit");
let spanRate = document.getElementById('selected-rate');

//1 sur 5//
function btn1() {
    spanRate.innerText = "★☆☆☆☆";
}

buttonRate[0].addEventListener('click', btn1)

//2 sur 5//
function btn2() {
    spanRate.innerText = "★★☆☆☆";
}

buttonRate[1].addEventListener('click', btn2)

//3 sur 5//
function btn3() {
    spanRate.innerText = "★★★☆☆";
}

buttonRate[2].addEventListener('click', btn3)

//4 sur 5//
function btn4() {
    spanRate.innerText = "★★★★☆";
}

buttonRate[3].addEventListener('click', btn4)

//5 sur 5//
function btn5() {
    spanRate.innerText = "★★★★★";
}

buttonRate[4].addEventListener('click', btn5)

//SUBMIT BUTTON//
function submit() {
    if (spanRate.childNodes.length == 0) {
        buttonSubmit.innerText="Donne nous une note !"
    }
    else {
        document.getElementById('popup').style.display = 'flex';
        document.getElementById('rateask').style.display = 'none';
    }
}

buttonSubmit.addEventListener('click', submit);