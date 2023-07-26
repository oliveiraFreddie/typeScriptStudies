"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number
let total;
total = 0xff0;
// array (type[])
let items;
items = [1, 2, 3];
let arrayString;
arrayString = ["foo", "bar"];
let values;
values = [1, 2, 3];
// tuple (array com parametros definidos)
let title;
title = [1, "foo"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL!
let coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log("Hello World");
}
// never
function error() {
    throw new Error(); // irá parar a execução do programa e mostrar o erro na tela
}
// object (qualquer objeto que não seja primitivo ou função é considerado um tipo de 'object')
let cart;
cart = {
    key: "fi",
};
// Type Inference (define o tipo pela informação recebida na variável)
let message2 = "mensagem definida";
message2 = "string nova";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
