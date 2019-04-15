
var number = 0;
var number2 = 0;

window.onload = function() {
    requestAnimationFrame(countup); //use it
    setTimeout(countup2,20);
    shownumber();
    shownumber2();

}

function countup() {

    number++;
    shownumber();
    if(number < 100)
        requestAnimationFrame(countup);
}
function countup2() {

    number2++;
    shownumber2();
    if(number2 < 100)
        setTimeout(countup2,20);
}

function shownumber() {
    document.querySelector("#display").innerHTML = number;
}
function shownumber2() {
    document.querySelector("#display2").innerHTML = number;
}