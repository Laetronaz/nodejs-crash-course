const EventEmitter = require("events");

// Create class
class MyEmmiter extends EventEmitter {}

//Init Object
const myEmmiter = new MyEmmiter();

// Event listener
myEmmiter.on("event", () => console.log("Event Fired!"));

//Init event
myEmmiter.emit("event");
myEmmiter.emit("event");
myEmmiter.emit("event");
myEmmiter.emit("event");
