"use strict";
//Readonly
const todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
};
console.log(todo);
// todo.completed = true; Não permite
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "Fechar Ghost of Tsushima",
    completed: false,
};
console.log(todo3);
const todo4 = {
    title: "Fechar Ghost of Tsushima",
    completed: false,
};
