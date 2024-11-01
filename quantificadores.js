let {regex, result} = require('./imports');
const {str, anotherStr} = require('./imports');

// ------------ Quantificadores ------------

// Os quantificadores em expressões regulares especificam quantas vezes um determinado caractere ou grupo de caracteres deve aparecer na string que está sendo analisada.


// ------------ Valores exatos ------------

regex = /s{2}/g // O caractere deve aparecer duas vezes na busca.
result = str.match(regex);
console.log(result);


// ------------ Valores mínimos ------------

regex = /m{2,}/g // O caractere deve aparecer, ao mínimo, duas vezes na busca.
result = anotherStr.match(regex);
console.log(result);


// ------------ Valores mínimos e máximo ------------

regex = /m{2,3}/g // O caractere deve aparecer, ao mínimo, duas vezes e, ao máximo, quatro vezes na busca.
result = anotherStr.match(regex);
console.log(result);
