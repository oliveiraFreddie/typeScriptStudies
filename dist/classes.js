"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level, power) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
        this.power = power;
    }
    get getLevel() {
        console.log("-----GET-----");
        return this.level;
    }
    set setPower(power) {
        this.power = power;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level} and power ${this.power}`);
    }
}
const will = new UserAccount("Willian", 30);
console.log(will);
// console.log(will.age); não consigo chamar a propriedade protected
will.logDetails();
const jhon = new CharAccount("Jhon", 45, "jhonmaster", 80, 78);
// console.log(jhon.nickname); não é possivel chamar por causa do private
console.log(jhon);
console.log(jhon.level); // é possivel chamar com o readonly
// jhon.level = 799 não é possivel alterar com o readonly nem dentro da class
jhon.logDetails();
jhon.logCharDetails();
jhon.setPower = 499;
console.log("jhonmaster Ups to", jhon.power, "power");
console.log(jhon.getLevel);
