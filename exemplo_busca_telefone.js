const texto = `Mussum Ipsum, cacilds vidis litro abertis.  Manduma pindureta quium dia nois paga. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mé, boa gentis num é. Per aumento de cachacis, eu reclamis.

Desde já, agradeço.
matheuscbv23@gmail.com.br
(24) 98100-2374`

const regex = /\(([0-9]{2})\) ?([0-9]{4,6}-[0-9]{4})/g
const result = texto.match(regex);
console.log(result);
