let {regex, result} = require('./imports');
const {str, multilineStr} = require('./imports');

// ------------ . (ponto) ------------

// Representa todos os caracteres, com exceção de quebras de linha. Ex.:

regex = /a./g;
result = str.match(regex);
console.log('Ponto: ', result);


// ------------ ^ (circunflexo) ------------

// Representa o início de uma string ou linha.

regex = /^Segunda/gm;
result = multilineStr.match(regex);
console.log('Circunflexo:', result);
 


// ------------ [^] (circunflexo entre colchetes) - Negação em conjuntos ------------

// Para realizarmos uma busca de negação, utilizamos o símbolo de circunflexo (^) dentro de um conjunto. Ex.:

regex = /[^a-t\s]/g;
result = str.match(regex);
console.log('Negação:', result);


// ------------ $ (cifrão) ------------

// Representa o final de uma string ou linha.

regex = /a$/gm;
result = multilineStr.match(regex);
console.log('Cifrão:', result);


// ------------ * (asterisco) ------------

// Representa zero ou mais ocorrências de um elemento.

regex = /om*/g;
result = str.match(regex);
console.log('Asterisco:', result);


// ------------ + (soma) ------------

// Representa um ou mais ocorrências de um elemento.

regex = /o+/g;
result = str.match(regex);
console.log('Soma:', result);


// ------------ ? (interrogação) ------------

// Representa nenhuma ou apenas uma correspondência de um elemento, tornando a busca opcional.

regex = /ss?/g;
result = str.match(regex);
console.log('Interrogação:', result);


// ------------ Escapamento de metacaracteres ------------

// Para escaparmos metacaracteres, devemos utilizar o caractere \ (Barra invertida). Ex.:

regex = /\./g
result = str.match(regex);
console.log('Escape:', result);