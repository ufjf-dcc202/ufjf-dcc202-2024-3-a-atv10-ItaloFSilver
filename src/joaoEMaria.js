console.log('módulo joaoEMaria');

let maria=2;
let joao=1;
function getMaria(){
    return maria;
}
function getJoao(){
    return joao;
}

function setJoao(novoValor){
    if (novoValor>0)
        joao=novoValor;
    else
        joao=0;
}
function setMaria(novoValor){
    if (novoValor>0)
        maria=novoValor;
    else
        maria=0;
}
function deJoaoParaMaria(){
    maria = joao + maria;
    joao = 0;
}
function deMariaParaJoao(){
    joao = maria + joao;
    maria = 0;
}

export{getMaria, getJoao, setJoao, setMaria, deJoaoParaMaria, deMariaParaJoao};