let tabelaReg = document.querySelector('.tbody-registradores')
let tabelaIns = document.querySelector('.tbody-instrucoes')

let tabReg = ""
let tabIns = ""

/*Essas duas variaveis estão sendo inicializadas no arquivo dados, e sendo carregado
    antes que esse arquivo no HTML, logo pode ser usado aqui dessa forma*/
    //console.log(registradores)
    //console.log(instrucoes)



// Iteração pelo objeto instrucoes
for (let chave in instrucoes) {
      //console.log(`${chave}: ${instrucoes[chave]}`);
      tabIns = tabIns + `<tr> <td>  ${chave} </td> <td>  ${instrucoes[chave]} </td> </tr>`
}


// Iteração pelo objeto registradores
for (let chave in registradores) {
    //console.log(`${chave}: ${registradores[chave]}`);
    tabReg = tabReg + `<tr> <td>  ${chave} </td> <td>  ${registradores[chave]} </td> </tr>`
}


tabelaReg.innerHTML = tabReg
tabelaIns.innerHTML = tabIns