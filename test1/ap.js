//this will only run after the page si loadded
window.onload = function() {

    alert("hi");


    document.getElementById("b_add").onclick=function() {
        compute('+');
    };
    document.getElementById("b_sub").onclick=function() {
        compute('-');
    };
    document.getElementById("b_div").onclick=function() {
        compute('/');
    };
    document.getElementById("b_mult").onclick=function() {
        compute('*');
    };
    document.getElementById("b_comm").onclick=function() {
        compute('%');
    };

    function compute(op){
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");



    let c = 0;

    switch(op){
        case '+': c = (parseInt(a.value) + parseInt(b.value));
        break;
        case '-': c = (parseInt(a.value) - parseInt(b.value));
        break;
        case '/': c = (parseInt(a.value) / parseInt(b.value));
        break;
        case '*': c = (parseInt(a.value) * parseInt(b.value));
        break;
        case '%': c = (parseInt(a.value) % parseInt(b.value));
        break;
    default:

    }




    document.querySelector("#output").innerHTML = c;
    
    document.querySelector("#output").value = c;

}
}
