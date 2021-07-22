/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name)
{
    this.name = name;
    this.isFlying = false;
}
Airplane.prototype.takeOff = function ()
{
    this.isFlying = true;
};
Airplane.prototype.land = function ()
{
    this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age)
{
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function (edible)
{
    if (this.stomach.length < 10)
        this.stomach.push(edible);
};

Person.prototype.poop = function ()
{
    this.stomach = [];
};

Person.prototype.toString = function ()
{
    return `${this.name}, ${this.age}`;
};

const anastasia = new Person("Anastasia", 25);
const vasilii = new Person("Vasilii", 41);

anastasia.eat("chicken");
anastasia.eat("cookies");

console.log(anastasia.stomach);

anastasia.poop();

console.log(anastasia.stomach);

console.log(anastasia.toString());

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon)
{
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function (gallons)
{
    return this.tank += gallons;
};

// Let's consider that our vehicle has a 15 gallon tank that lasts for 300 miles.
// 15 gallons = 300 miles
// 1 gallon  =   x miles
// x = 300 miles / 15 gallons = 20 miles per gallon

Car.prototype.drive = function (distance)
{
    this.odometer += distance;

    const gallons = (distance / this.milesPerGallon);

    if (this.tank >= gallons)
    {
        this.tank -= gallons;
        return `I drove ${this.odometer} miles`;
    }
    else
    {
        this.tank = 0;
        return `I ran out of fuel at ${this.odometer} miles!`;
    }
};

const lexus = new Car("Lexus", 20);

lexus.fill(15);

let continueDriving = true;

while (continueDriving)
{
    const message = lexus.drive(0.5);
    console.log(message);

    if (message.startsWith("I ran out of fuel"))
        continueDriving = false;
}
// -----------------------------------------------------------------------------
// function Car(info)
// {
//     this.model = info.model;
//     this.milesPerGallon = info.milesPerGallon;
//     this.tank = 0;
//     this.odometer = 0;
// };

// Car.prototype.fill = function (gallons)
// {
//     return this.tank += gallons;
// };

// const carOne = new Car(
//     {
//         model: "Lada",
//         milesPerGallon: 19,
//     });

// console.log("Task 2", carOne.fill(15));

// function Car(info)
// {
//     this.model = info.model;
//     this.milesPerGallon = info.milesPerGallon;
// }
// -----------------------------------------------------------------------------
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(attributes)
{
    Person.call(this, attributes);
    this.favoriteToy = attributes.favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function ()
{
    return `Playing with ${this.favoriteToy}`;
};

const babyName = new Baby(
    {
        name: "Baybee",
        age: "2",
        favoriteToy: "Barbie"
    });

console.log("Task 3:", babyName.play());
console.log("Task 3:", babyName.name);

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:

  1. Window/ Global Object Binding
  When in strict mode, 'this' will return undefined.
  When not in strict mode, 'this' will return the window in node.
  If we get either of these answers, it means we have not given 'this' any context so it is defaulting to the main window/ global object we are working inside of.
  Window binding is an error, we do not want it to happen.

  2. Implicit Binding
  When the function is invoked, whatever is to the left of the dot (leftOfTheDot.this) is what is being referenced by 'this'.

  3. New Binding
  When a function is invoked as a constructor function using the 'new' keyword, 'this' will point to the new object that is created.
  Building a constructor function is like building a template for new objects.
  When we invoke the constructor function, the invocation builds a new object.
  The 'this' keyword points to the new object that is created.

  4. Explicit Binding
  We explicitly assign the 'this' keyword using '.call', '.apply', or '.bind' methods.

*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo()
{
    console.log('its working!');
    return 'bar';
}
foo();
module.exports = {
    foo,
    Person,
    Car,
    Baby
};