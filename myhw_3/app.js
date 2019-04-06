//this will only run after the page si loadded
window.onload = function() {

    document.getElementById("b_add").onclick=function() {

        console.log("ok");
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");



        let c = (parseInt(a.value) + parseInt(b.value));

        document.querySelector("#output").innerHTML = c;



    };


    document.getElementById("b_sub").onclick=function() {

        console.log("ok");
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");



        let c = (parseInt(a.value) - parseInt(b.value));

        document.querySelector("#output").innerHTML = c;



    };

    document.getElementById("b_div").onclick=function() {

        console.log("ok");
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");



        let c = (parseInt(a.value) / parseInt(b.value));

        document.querySelector("#output").innerHTML = c;



    };

    document.getElementById("b_mult").onclick=function() {

        console.log("ok");
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");



        let c = (parseInt(a.value) * parseInt(b.value));

        document.querySelector("#output").innerHTML = c;



    };

    document.getElementById("b_comm").onclick=function() {

        console.log("ok");
        let a = document.querySelector("#n1");
        let b = document.querySelector("#n2");



        let c = (parseInt(a.value) % parseInt(b.value));

        document.querySelector("#output").innerHTML = c;



    };

    document.getElementById("del").onclick=function() {

        document.querySelector("#n1").value = "";
        document.querySelector("#n2").value = "";
        document.querySelector("#output").innerHTML = "0";



    };

}






