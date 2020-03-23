var greet = function(name) {
	alert("Hi " + name + " welcome!");
}

greet("austin");

var sub = function(num1, num2) {
  return num1 - num2;
}

sub(30,20);

var multiply = function(num1, num2){
  return num1 * num2;
}

multiply(30,20);

var threeTimes = function(num1, num2, num3) {
  return num1 * num2 * num3;
}

threeTimes(30, 20, 10);

var divide = function(num1, num2) {
  return num1 / num2;
}

divide(30, 20);

var remainder = function(num1, num2) {
  return num1 % num2;
}

remainder(30, 20);

var message = function(age, name, food) {
  return "Users age: " + age + "users name: " + name + "Users favorite food: " + food;
}

var userAge = prompt("Whats your age?");
var userName = prompt("Whats your name?");
var userFood = prompt("Whats your favorite food?");

alert(message(userAge, userName, userFood));