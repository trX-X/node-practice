var sum = function (a, b) {
    return a + b;
};
var answer = sum(7, 5);
console.log(answer);
//Array
var pets = ['Cat', 'Dog'];
var pets2 = ['lion', 'dragoin'];
//Object
var wizard = {
    a: 'John'
};
//Tuple
var basket;
basket = ['basketball', 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
//Function
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
//Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'asasasas';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal('arrgh');
// lion.sing
//union
var confused = 's';
