let {regex, result} = require('./imports');
const {str} = require('./imports');

// ------------ | (barra vertical) / operador OR ------------

// Com a barra vertical, conhecida como operador (or), podemos adicionar opções para nossa busca. Ex.:

regex = /e|é/g;
result = str.match(regex);
console.log('Operador OR', result);


// ------------ [] (colchetes) / conjuntos ------------ 

// Com colchetes, podemos especificar um conjunto de caracteres a serem buscados individualmente. Ex.:

regex = /[abc]/g;
result = str.match(regex);
console.log('Conjunto:', result);


// ------------ - (traço) / sequências ------------

// Podemos criar uma sequência em nossos conjuntos utilizando o traço (-). Ex.:

regex = /[a-e]/g;
result = str.match(regex);
console.log('Sequência:', result);


// ------------ () (parênteses) / grupo ------------

// Podemos criar grupos para nossa busca por meio dos parênteses.

regex = /(rio)/g;
result = str.match(regex);
console.log('Grupo:', result);