function IDtesti(arvo){
    if (arvo.length < 6 || arvo.includes(" ")){
        document.getElementById("virhe").style.display = "inline";
    } else {
        document.getElementById("virhe").style.display = "none";
    }
}

function tyhja(value, id){ 
    if (value.length < 1){
        id.style.display = "inline";
    } else {
        id.style.display = "none";
    }
}

function postinumero(arvo, id){
    if (arvo.length != 5 || arvo.includes("-") || arvo.includes("+")){
        id.style.display = "inline";
    } else {
        id.style.display = "none";
    }
}

function gmail(arvo, id){
    if (arvo.includes("@")){
        id.style.display = "none";
    } else {
        id.style.display = "inline";
    }
}



function submit(suku, kieli){
    IDtesti(document.getElementById("ID").value);
    tyhja(document.getElementById("salasana").value, document.getElementById('salasanavirhe'))
    tyhja(document.getElementById("nimi").value, document.getElementById('nimivirhe'))
    tyhja(document.getElementById("osoite").value, document.getElementById('osoitevirhe'))
    postinumero(document.getElementById("postinumero").value, document.getElementById('postivirhe'))
    gmail(document.getElementById("sähköposti").value, document.getElementById('gmailvirhe'))

    var mies = document.getElementById("mies");
    var nainen = document.getElementById("nainen");
    var suomi = document.getElementById("suomi")
    var muu = document.getElementById("muu")
    if (mies.checked == false && nainen.checked == false){
        suku.style.display = "inline";
    } else {
        suku.style.display = "none";
    }
    if (suomi.checked == false && muu.checked == false){
        kieli.style.display = "inline";
    } else {
        kieli.style.display = "none";
    }  

    const spans = document.querySelectorAll("span.error")

    spans.forEach(span =>{
        if (span.style.display == "inline"){
            console.log("virhe")
        } else {
            console.log("ei virheitä")
        }
    })
}