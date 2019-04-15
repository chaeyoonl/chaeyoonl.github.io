
var number = 0;


window.onload = function() {
    setTimeout(countup,1000); //1번만
    shownumber();

}

function countup() {

    number++;
    shownumber();
    if (number<100)
        setTimeout(countup,1000);
}

function shownumber() {
    document.querySelector("#display").innerHTML = number;
}