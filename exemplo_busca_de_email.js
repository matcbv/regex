const texto = `Mussum Ipsum, cacilds vidis litro abertis.  Manduma pindureta quium dia nois paga. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mé, boa gentis num é. Per aumento de cachacis, eu reclamis.

Desde já, agradeço.
matheuscbv23@gmail.com.br`

let regex = /([a-zA-Z-0-9\.\_]{2,})@([a-zA-Z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/g;
// Podemos simplificar nossa expressão acima através das classes de caracteres:
regex = /([\w]{2,})@([^\W_]{2,})(\.[^\W_]{2,})(\.[^\W_]{2,})?/g
// Com [^\W_], iremos descartar todos os caracteres não alfanuméricos e _.
const result = texto.match(regex);
console.log(result);
