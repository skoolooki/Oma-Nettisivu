const lista = [];

function lisaa(){
    let a = document.getElementById("teksti");
    lista.push(a.value)
    console.log(lista);
    let syota = lista.map(nimi => `<li> ${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = syota;
}

function poista(){
    let a = document.getElementById("teksti");
    for(var i=0; i <= lista.length; i++) {
        if (lista[i] === a.value){
            lista.splice(i, 1);
        }
    }
    console.log(lista);
    let syota = lista.map(nimi => `<li> ${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = syota;
}

function sort(){
    lista.sort();
    console.log(lista);
    let syota = lista.map(nimi => `<li> ${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = syota;
}

