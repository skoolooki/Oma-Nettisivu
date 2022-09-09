var lista = [];

function lisaa(){
    let syota = lista.map(nimi => `<li> ${nimi}</li>`).join('\n');
    document.querySelector('ul').innerHTML = syota;
}

lisaa();

for (var i = 1; i <= 10; i++){
    lista.push(prompt("Lisää kaveri"));
    prompt.value = ``;
    lisaa();
    console.log(lista);
}