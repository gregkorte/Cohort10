$(document).ready(function(){
function Make(makeName){
	this.makeName = makeName;
}
function Model(model){
	this.model = model;
}
Model.prototype = new Make();
function Car(color){
	this.color = color;
}
Car.prototype = new Model();

Car.prototype.makeName = "Nissan";
Car.prototype.model = "Rogue";

var cars = [];
var car1 = new Car("White");
var car2 = new Car("Black");
var car3 = new Car("Beige");

cars.push(car1, car2, car3);

function outputCars(cars){
	var str = '';
	for(var i = 0; i < cars.length; i++){
		console.log(cars)
		str += "<p class=" + cars[i].color + ">" + cars[i].color + " " + Car.prototype.makeName + " " + Car.prototype.model + "</p>"
	}
	$('#output').append(str)
}
outputCars(cars);
})

