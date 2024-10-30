// Toda a expressão regular (regex) vem contida entre barras (/). Junto delas, podemos utilizar modificadores que alteram o comportamento de sua busca.

const str = 'Esse é um texto aleatório';
const multilineStr = 'Esse é um texto \
                      Composto por \
                      Múltiplas linhas'


// ------------ Modificadores ------------

// - g (global): Busca todas as ocorrências na string, não apenas a primeiras.

const gResult = str.match(/e/g);
console.log(gResult);


// - i (ignore case): Ignora a diferença entre maiúsculas e minúsculas durante a busca.

const iResult = str.match(/e/gi); 
console.log(iResult);

// Obs.: Caso utilizemos somente o i, a busca iria parar na primeira ocorrência.

// - m (multiline): Trata a string como em múltiplas linhas.

const mResult = str.match(/e/)