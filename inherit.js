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
console.log(mimi instanceof Animal);  //子类对象当然是父类的实例


//-------------------------类式继承---------------------------

function Animal() {
    this.name = 'mengmeng';
}

function Cat() {
    this.age = 16;
}

// 如果是值类型，名字和父类重复，则会在子对象里也加上一个同名的属性
// 如果是引用类型，则子类指向的都是同一个对象
Cat.prototype = new Animal();
var cata = new Cat();
var catb = new Cat();
cata.name = 'meme';
console.log(catb.name);


//------------------------寄生式继承---------------------------
function inheritObject(obj) {
    function F() {
    }

    // 原型继承
    F.prototype = obj;
    return new F();
}

function createObj(obj) {
    var subObj = inheritObject(obj);

    subObj.getName = function () {
        // 一些方法
    };
    return subObj;
}

function SuperObj() {
}

var superObj = new SuperObj();
var subObj = createObj(superObj);
console.log(subObj instanceof SuperObj);



