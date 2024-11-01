let {regex, result} = require('./imports');
const {numericStr} = require('./imports');

// ------------ Classes de caractere ------------

// As classes de caracteres em expressões regulares são representações que combinam tipos específicos de caracteres


// ------------ \s (espaços em branco) ------------

// Corresponde a qualquer espaço em branco, incluindo espaços, tabulações e quebras de linha. Equivalente a [ \t\r\n\f].

regex = /\s/g;
result = numericStr.match(regex);
console.log('Espaços em branco:', result);


// ------------ \S (exceto espaços em branco) ------------

// Corresponde a qualquer caractere que não seja um espaço em branco.

regex = /\S/g;
result = numericStr.match(regex);
console.log('Exceto espaços em branco:', result);


// ------------ \d (dígito) ------------

// Corresponde a qualquer dígito de 0 a 9. Equivalente a [0-9].

regex = /\d/g;
result = numericStr.match(regex);
console.log('Dígito:', result);


// ------------ \D (não dígito) ------------

// Corresponde a qualquer caractere que não seja um dígito. Equivalente a [^0-9].

regex = /\S\D/g;
result = numericStr.match(regex);
console.log('Não dígito:', result);


// ------------ \w (alfanumérico) ------------

// Corresponde a qualquer caractere alfanumérico, incluindo letras (maiúsculas e minúsculas), dígitos e o caractere de sublinhado (_). Equivalente a [a-zA-Z0-9_]

regex = /\w/g;
result = numericStr.match(regex);
console.log('Alfanumérico:', result);

// ------------ \W (não alfanumérico) ------------

// Corresponde a qualquer caractere não alfanumérico.

regex = /\w/g;
result = numericStr.match(regex);
console.log('Alfanumérico:', result);