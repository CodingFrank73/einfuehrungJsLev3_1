
let range = document.getElementById("schieber");
let selectFonts = document.getElementById("selectFonts");
let inputText = document.getElementById("text");


function changeFontsSize() {

    document.getElementById("result").innerHTML = inputText.value;
    document.getElementById("result").style.fontSize = range.value + 'rem';

    switch (selectFonts.value) {
        case "0":
            document.getElementById("result").classList.remove("openSans", "roboto", "yuseiMagic");
            document.getElementById("result").classList.add("bodoniModa");
            break;

        case "1":
            document.getElementById("result").classList.remove("bodoniModa", "roboto", "yuseiMagic");
            document.getElementById("result").classList.add("openSans");
            break;

        case "2":
            document.getElementById("result").classList.remove("bodoniModa", "openSans", "yuseiMagic");
            document.getElementById("result").classList.add("roboto");
            break;

        case "3":
            document.getElementById("result").classList.remove("bodoniModa", "openSans", "roboto");
            document.getElementById("result").classList.add("yuseiMagic");
    }



}


