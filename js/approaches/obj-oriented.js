/*
- Similar objects: have same properties, different values
*/

// Methods: object properties, that are functions
let dog = {
	name: 'Spot',
	numLegs: 4,
	sayLegs: function () {
		return 'This dog has ' + dog.numLegs + ' legs.';
	},
};

dog.sayLegs();

// Constructor:
// - function that can set up a new object.
// - Not a constructor,
// - Doesn't return anything
// - After creation, can access/modify keys
function Bird() {
	this.name = 'Albert';
	this.color = 'blue';
	this.numLegs = 2;
}
let blueBird = new Bird();

function Dog(name, color) {
	this.name = name;
	this.color = color;
	// Own property:
	this.numLegs = 4;
}
// Prototype property:
Dog.prototype.numTails = 1;
Dog.prototype = {
	constructor: Dog, // prevents accidental overwrite with cardinal.constructor === Object;
	numHeads: 1,
	eat: function () {
		console.log('mampf');
	},
	describe: function () {
		console.log('My name is ' + this.name + '!');
	},
};

let cardinal = new Dog('Bruce', 'red'); // won't show .numTails
console.log(cardinal.numTails);

cardinal.constructor === Dog; // true, can be overwritten
cardinal instanceof Dog; // true, can't be overwritten, so BETTER
Dog.prototype.isPrototypeOf(cardinal); // true
// A prototype is an obj: prototype chain, supertype, subtype
Object.prototype.isPrototypeOf(Dog.prototype); // true

cardinal.hasOwnProperty(numLegs); // true

let ownProps = [];
let prototypeProps = [];

for (let property in cardinal) {
	if (cardinal.hasOwnProperty(property)) {
		ownProps.push(property);
	} else {
		prototypeProps.push(property);
	}
}
console.log(ownProps, prototypeProps);

// Inheritance
function ParentObj() {}
ParentObj.prototype = {}
ChildObj.prototype = Object.create(ParentObj.prototype);
ChildObj.prototype.methodName = function() {...};

function Animal() {}
Animal.prototype = {
	constructor: Animal,
	eat: function () {
		console.log('nom nom nom');
	},
};

let duck = Object.create(Animal.prototype);
Bird.prototype = Object.create(Animal.prototype); // make inheritance
Bird.prototype.constructor = Bird; // Automatically say correct relative parent as constructor
let beagle = new Bird();

// Mix-ins: no inheritance, but shared attributes
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
let bird = {
  name: "Donald",
  numLegs: 2
};
flyMixin(bird);

// Privacy (weight is private, can only be accessed with getWeight--> closure):
function Bee() {
  let weight = 15;
  this.getWeight = function() {
    return weight;
  };
}

// IIFE, can't b
(function () {
  console.log("This is Immediately Invoked Function Expression (IIFE)");
  console.log("Is anonymous, can't be called/referenced later on");
})();

// Why IIFE --> nicely package
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
motionModule.glideMixin(duck);
duck.glide();