let {regex, result} = require('./imports');
const {str, multilineStr, oneLineStr} = require('./imports');

// ------------ g (global) ------------

// Busca todas as ocorrências na string, não apenas a primeiras.

const gResult = str.match(/e/g);
console.log(gResult);

// Obs.: Caso não utilizemos o g, a busca iria parar na primeira ocorrência.


// ------------ i (ignore case) ------------

// Ignora a diferença entre maiúsculas e minúsculas durante a busca.

const iResult = str.match(/e/gi); 
console.log(iResult);


// ------------ m (multiline) ------------

// Trata a string como múltiplas linhas, fazendo com que ^ e $ correspondam ao início e ao fim de cada linha em uma string multilinha.

const mResult = multilineStr.match(/^Segunda/gm)
console.log(mResult)

// Obs.: Utilizando apenas g, a busca seria feita apenas na primeira linha, resultando em null.


// ------------ s (dotAll) ------------

// Permite que o operador . corresponda a quebras de linha (\n), tratando a string como uma única linha.

const sResult = oneLineStr.match(/m.q/gs)
console.log(sResult);


// ------------ y (sticky) ------------

