function testi(arvo){
    if (document.getElementById("myList").value == "cTOf"){
        numero = parseInt(arvo);
        document.getElementById("vastaus").innerHTML = numero * 1.8 + 32;
    }
    if (document.getElementById("myList").value == "cTOk"){
        numero = parseInt(arvo);
        document.getElementById("vastaus").innerHTML = numero + 273.15;
    }
    if (document.getElementById("myList").value == "fTOc"){
        numero = parseInt(arvo);
        document.getElementById("vastaus").innerHTML = (numero - 32) / 1.8000;
    }
    if (document.getElementById("myList").value == "fTOk"){
        numero = parseInt(arvo);
        document.getElementById("vastaus").innerHTML = ((numero -32) / 1.8000) + 273.15;
    }
    if (document.getElementById("myList").value == "kTOc"){
        numero = parseInt(arvo);
        document.getElementById("vastaus").innerHTML = numero - 273.15;
    }
    if (document.getElementById("myList").value == "kTOf"){
        numero = parseInt(arvo);
        document.getElementById("vastaus").innerHTML = (numero - 273.15) * 1.8000 + 32;
    }
}

 