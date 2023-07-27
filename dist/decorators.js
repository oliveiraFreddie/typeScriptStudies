"use strict";
// @Component
// @Seletor
// @useState("dasdas")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Factory
// function Logger(prefix: string) {
//   return (target) => {
//     console.log(`${prefix} - ${target}`);
//   };
// }
// @Logger("awesome")
// class Foo {}
// Class decorator
// function setAPIVersion(apiVersion: string) {
//   return (constructor) => {
//     return class extends constructor {
//       version = apiVersion;
//     };
//   };
// }
// // decorator - anotar a versão da API
// @setAPIVersion("2.0.0")
// class API {}
// console.log(new API());
// Property decorator
// function minLength(length: number) {
//   return (target: any, key: string) => {
//     let val = target[key];
//     const getter = () => val;
//     const setter = (value: string) => {
//       if (value.length < length) {
//         console.log(
//           `Error: voce não pode criar ${key} com o tamanho menor que ${length}.`
//         );
//       } else {
//         val = value;
//       }
//     };
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//     });
//   };
// }
// class Movie {
//   // validação - se for menor que 5 - error
//   @minLength(50)
//   title: string;
//   constructor(t: string) {
//     this.title = t;
//   }
// }
// const movie = new Movie("Interstellar");
// console.log(movie.title);
// Method decorator
function delay(ms) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}... `);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
        };
    };
}
class Greeter {
    constructor(g) {
        this.greeting = g;
    }
    // esperar um tempo e aí vai rodar o método (ms)
    greet() {
        console.log(`Hello! ${this.greeting}`);
    }
}
__decorate([
    delay(2000)
], Greeter.prototype, "greet", null);
const pessoinha = new Greeter("Pessoinha!");
pessoinha.greet();
// Parameter decorator
// Acessor decorator
