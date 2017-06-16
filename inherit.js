/**
 * Created by liumw on 2017/6/15.
 */

// 组合式继承
function Animal(color, age) {
    this.color = color;
    this.age = age;
}

Animal.prototype.getAge = function () {
    return this.age;
};

// 分别应用了构造函数继承和类式继承
function Cat(color, age, name) {
    Animal.call(this, color, age);
    this.name = name;
}

Cat.prototype = new Animal();

var mimi = new Cat('red', '10', 'mimi');
console.log(mimi.getAge());
