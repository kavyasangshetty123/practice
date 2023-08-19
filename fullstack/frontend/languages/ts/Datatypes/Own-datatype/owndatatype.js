var Human = /** @class */ (function () {
    function Human() {
        this.eyes = 2;
    }
    Human.prototype.withEyes = function () {
        console.log("we can see");
    };
    Human.prototype.withnOSE = function () {
        console.log("we can see");
    };
    return Human;
}());
var teju = new Human();
teju;
console.log(teju);
