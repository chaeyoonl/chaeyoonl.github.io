
data = [
    {
        "lastname":"kim",
        "firstname":"yuna",
        "phonenumber":"010-123",
    },
    {
        "lastname":"kim",
        "firstname":"yuna",
        "phonenumber":"010-123",
    }
];



window.onload = init ;


function init() {

    a = document.getElementById("zzz").onclick = abc;
   
    showdata
}

function showdata() {

    for(i=0; i<data.lenght; i++) {


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
        td1.innerText = data[i].firstname;
        td2.innerText = data[i].lastname;
        td3.innerText = data[i].phonename;
        td4.classlist = "test-center";

        td4.innerHTML= "<img onclick='sakje(+data[i].id+);' src='delete.svg' width:10px height:10px/>";
    
    
        mtr.append(td1);
        mtr.append(td2);
        mtr.append(td3);
        mtr.append(td4);
        tb.append(mtr);
    

    }
}




function abc() {





}

function sakje(obj) {
    //console.log(obj);
obj.parentNode.parentNode.remove();
    


}