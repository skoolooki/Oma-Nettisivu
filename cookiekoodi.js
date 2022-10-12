function lisaa(arvo){
    if (document.getElementById("bought1").style.display == "inline"){
        summa = parseInt(arvo) + 2;
    } else {
        summa = parseInt(arvo) + 1;
    }
    document.getElementById("number").innerHTML = summa;
}

// Item 1
function overitem1() {
    document.getElementById("overlay1").style.width = "100%"
}
function outitem1() {
    document.getElementById("overlay1").style.width = "0%"
    document.getElementById("warning1").style.display = "none"
}
function buyitem1(arvo){
    if (document.getElementById("bought1").style.display == "inline"){
        return;
    }

    if (arvo < 200){
        document.getElementById("warning1").style.display = "inline"
    } else {
        document.getElementById("warning1").style.display = "none"
        document.getElementById("number").innerHTML = arvo - 200
        document.getElementById("bought1").style.display = "inline"
    }
}

// Item 2
function overitem2() {
    document.getElementById("overlay2").style.width = "100%"
}
function outitem2() {
    document.getElementById("overlay2").style.width = "0%"
    document.getElementById("warning2").style.display = "none"
}

setInterval(autofarm, 500);

function autofarm(){
    if (document.getElementById("bought2").style.display == "none"){
        return;
    }

    var arvo = parseInt(document.getElementById('number').innerHTML)
    summa = parseInt(arvo) + 1;
    document.getElementById("number").innerHTML = summa;
}


function buyitem2(arvo){
    if (document.getElementById("bought2").style.display == "inline"){
        return;
    }

    if (arvo < 300){
        document.getElementById("warning2").style.display = "inline"
    } else {
        document.getElementById("warning2").style.display = "none"
        document.getElementById("number").innerHTML = arvo - 300
        document.getElementById("bought2").style.display = "inline"
    }
}