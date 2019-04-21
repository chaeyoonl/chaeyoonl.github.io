//JSON DATA  
data = [
    {
        "id": "1",
        "name": "cookie",
        "price": 1500   //요기를 텍스트로 해버리면 오름차순할때 앞글자만보고 "900" > "10000"이 성립되는 이상한결과가 도출된다.
    },
    {
        "id": "2",
        "name": "pizza",
        "price": 12000 
    }
];

temp = [
    {
        "id":"12",
        "name":"hi",
        "price":15
    }
];
cy = [
    {
        "id":"12",
        "name":"hi",
        "price":15
    }
];

ss = 3;
///  When you get data from some JSON resource
// to convert it into an object...
// data = JSON.parse(data);







window.onload = init;
function init() {
    document.querySelector("#save").onclick = jojang; //save버튼 클릭하면 jojang함수로 이동
    //document.querySelector는 
    //제공한 선택자 또는 선택자 뭉치와 일치하는 
    //문서 내 첫 번째 Element를 반환합니다.
    document.querySelector("#ida").onclick = ascending_id;
    document.querySelector("#idd").onclick = descending_id;
    document.querySelector("#namea").onclick = ascending_name;
    document.querySelector("#named").onclick = descending_name;
    document.querySelector("#pricea").onclick = ascending_price;
    document.querySelector("#priced").onclick = descending_price;
    showData();
}

function showData() {
    tb = document.querySelector("#datax"); //queryselector 은 Returns the first element that is a descendant of node that matches selectors.


    tb.innerHTML = "";   //delete all inside tbody

    for (i = 0; i < data.length; i++) {
        
        if (i > ss) {
            data[i].id = i+1; //새값 넣을때 기존숫자는 유지되고 새로넣는값 id만 바꾸기,얘없으면 기존있던값도 숫자가 처음부터 시작함
            }
        mtr = document.createElement("tr"); //테이블 생성
        hi = document.createElement("td");
        hi_2 = document.createElement("td");
        hi_3 = document.createElement("td");

        td1 = document.createElement("TEXTAREA");//Creates an instance of the element for the specified tag. 
        td2 = document.createElement("TEXTAREA");//td:셸을 만드는 역할
        td3 = document.createElement("TEXTAREA"); //tr:가로줄을 만드는 역할

        td1.innerText = data[i].id; //innertext는 출력해주는 친구
        td2.innerText = data[i].name;
        td3.innerText = data[i].price;

        mtr.append(hi);
        hi.append(td1);
     //append는 컨텐츠를 선택된 요소 내부의 끝 부분에서 삽입 
        mtr.append(hi_2);
        hi_2.append(td2);
        //mtr에서 생성한 행에 저러한 셸들(3개)를 넣음
        mtr.append(hi_3);
        hi_3.append(td3);
        //hi_3.append(td3);
        tb.append(mtr);
    }
    ss = data.length-1;
}
function showDatas() {
    tb = document.querySelector("#datax");
    tb.innerHTML = "";   //delete all inside tbody

    for (i = 0; i < data.length; i++) {
       
        mtr = document.createElement("tr"); //테이블 생성
        hi = document.createElement("td");
        hi_2 = document.createElement("td");
        hi_3 = document.createElement("td");
        
       td1 = document.createElement("TEXTAREA");//Creates an instance of the element for the specified tag. 
       td2 = document.createElement("TEXTAREA");//td:셸을 만드는 역할
       td3 = document.createElement("TEXTAREA"); //tr:가로줄을 만드는 역할
       
       td1.innerText = data[i].id; //innertext는 출력해주는 친구
       td2.innerText = data[i].name;
       td3.innerText = data[i].price*1;

       mtr.append(hi);
       hi.append(td1);
    //append는 컨텐츠를 선택된 요소 내부의 끝 부분에서 삽입 
       mtr.append(hi_2);
       hi_2.append(td2);
       //mtr에서 생성한 행에 저러한 셸들(3개)를 넣음
       mtr.append(hi_3);
       hi_3.append(td3);
       //hi_3.append(td3);
       tb.append(mtr);
    }
}


function jojang() {
    //console.log("in jojang");
    ln = document.querySelector("#name").value;
    fn = document.querySelector("#price").value;

    let contact = new Object(); //Provides functionality common to all JavaScript objects. 
    //얘없으면 새로 저장하는애들 안생김.
    contact.name = ln;  
    contact.price = fn; 
    contact.id = Math.floor( (Math.random() * 100000));
    console.log(contact);
    data.push(contact); //push는 배열에 새로운 값 추가
    showData();
}

/*========================================================*/
function ascending_id() {
    tb = document.querySelector("#datax");

    for (i = 0; i < data.length-1; i++) {
        for(j = 0 ; j < data.length-1 -i; j++) {
            if (data[j].id > data[j+1].id) {
            temp[0] = data[j];
            data[j] = data[j+1];
            data[j+1] = temp[0];
            }
        }
    }


    showDatas();
}

function descending_id() {
    tb = document.querySelector("#datax");

    for (i = 0; i < data.length; i++) {
        for(j = 0 ; j < data.length-1 ; j++) {
            if (data[j].id < data[j+1].id) {
            temp[0] = data[j];
            data[j] = data[j+1];
            data[j+1] = temp[0];
            }
        }
    }


    showDatas();
}

function ascending_name() {
    tb = document.querySelector("#datax");

    for (i = 0; i < data.length-1; i++) {
        for(j = 0 ; j < data.length-1 -i; j++) {
            if (data[j].name > data[j+1].name) {
            temp[0] = data[j];
            data[j] = data[j+1];
            data[j+1] = temp[0];
            }
        }
    }


    showDatas();
}

function descending_name() {
    tb = document.querySelector("#datax");

    for (i = 0; i < data.length; i++) {
        for(j = 0 ; j < data.length-1 ; j++) {
            if (data[j].name < data[j+1].name) {
            temp[0] = data[j];
            data[j] = data[j+1];
            data[j+1] = temp[0];
            }
        }
    }


    showDatas();
}

function ascending_price() {
    tb = document.querySelector("#datax");

    for (i = 0; i < data.length-1; i++) {
        for(j = 0 ; j < data.length-1 -i; j++) {
            if (data[j].price*1 > data[j+1].price*1) {
            temp[0] = data[j];
            data[j] = data[j+1];
            data[j+1] = temp[0];
            }
        }
    }


    showDatas();
}

function descending_price() {
    tb = document.querySelector("#datax");

    for (i = 0; i < data.length; i++) {
        for(j = 0 ; j < data.length-1 ; j++) {
            if (data[j].price*1 < data[j+1].price*1) {
            temp[0] = data[j];
            data[j] = data[j+1];
            data[j+1] = temp[0];
            }
        }
    }


    showDatas();
}
function onKeyDown(){

    if(event.keyCode==27) { //esc누르면 취소
        for (i = 0 ; i < data.length ; i++) {
            for (j = 0 ; j < 3 ; j ++) {
                if (j = 0) data[i].id = cy[i*3+j].innerText; //innertext는 값 바꾸기 전값이 들어있음
                if (j = 1) data[i].name = cy[i*3+j].innerText;
                if (j = 2) data[i].price = cy[i*3+j].innerText*1; //문자열에 숫자1을 곱하면 문자열숫자가 진짜숫자로 변함
            }
        }
        showDatas();
            }
    
    if(event.keyCode==13) { //글자 입력하고 enter누르면 글자정보 입력
    cy = document.querySelectorAll("textarea");   //그것의 모든정보 가져옴 < document.querySelector은 맨 앞정보만 가져옴

    for (i = 0 ; i < data.length ; i++) {
        for (j = 0 ; j < 3 ; j ++) {
            if (j = 0) data[i].id = cy[i*3+j].value;
            if (j = 1) data[i].name = cy[i*3+j].value; //value 는 내가바꾼 값을 보여줌
            if (j = 2) data[i].price = cy[i*3+j].value*1; //문자열에 숫자1을 곱하면 문자열숫자가 진짜숫자로 변함
        }
    }
    showDatas();
        }
}