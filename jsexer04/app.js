

window.onload = init ;


function init() {

    a = document.getElementById("zzz").onclick = abc;
   

}

function abc() {





    ln = document.querySelector("#lastname").value;
    fn = document.querySelector("#firstname").value;
    phone = document.querySelector("#phonenumber").value;

    //console.log(ln);

    tb = document.querySelector("#data");
    mtr = document.createElement("tr");

    //this method is short but too many data
    /*
    mtr.innerHTML = "<td>"+ ln +"</td><td>"
     +fn +"</td><td>" + +"</td><td>2</td><td>3</td>"
     */


    //this method is easy to understand
    td1=document.createElement("td");
    td2=document.createElement("td");
    td3=document.createElement("td");
    td4=document.createElement("td");
    td1.innerText = ln;
    td2.innerText = fn;
    td3.innerText = phone;
    td4.innerHTML= "<img onclick='sakje(this);' src='delete.svg' width:10px height:10px/>";


    mtr.append(td1);
    mtr.append(td2);
    mtr.append(td3);
    mtr.append(td4);
    tb.append(mtr);

}

function sakje(obj) {
    //console.log(obj);
obj.parentNode.parentNode.remove();
    


}