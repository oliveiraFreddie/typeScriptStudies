// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number
let total: number;
total = 0xff0;

// array (type[])
let items: number[];
items = [1, 2, 3];
let arrayString: string[];
arrayString = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple (array com parametros definidos)
let title: [number, string];
title = [1, "foo"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = [1];

// void (vazio)
function logger(): void {
  console.log("Hello World");
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error(); // irá parar a execução do programa e mostrar o erro na tela
}

// object (qualquer objeto que não seja primitivo ou função é considerado um tipo de 'object')
let cart: object;

cart = {
  key: "fi",
};

// Type Inference (define o tipo pela informação recebida na variável)
let message2 = "mensagem definida";
message2 = "string nova";

window.addEventListener("click", (e) => {
  console.log(e.target);
});
