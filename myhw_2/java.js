function say() {
    alert("hello");
}

i = 0;
function picture() {
    i = i + 1;
    
    if (i > 0) {
        if (i%3==1) {
            top.down.document.pic.src = "test_2.jpg"
        }
        if (i%3==2) {
            top.down.document.pic.src = "test_3.jpg"
        }
        if (i%3==0) {
            top.down.document.pic.src = "test_1.jpg"
        }


    }
    
}

function picture_2() {
    i = i - 1;

    if (i > 0) {
        if (i%3==1) {
            top.down.document.pic.src = "test_2.jpg"
        }
        if (i%3==2) {
            top.down.document.pic.src = "test_3.jpg"
        }
        if (i%3==0) {
            top.down.document.pic.src = "test_1.jpg"
        }


    }


}