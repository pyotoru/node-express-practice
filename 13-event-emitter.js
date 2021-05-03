// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on("response", (name, id) => {
	console.log(`data recieved user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
	console.log("some other logic here");
});

customEmitter.emit("response", "john", 34);


// 1. you can have as many functions listening to an event as you want
// 2. the order matters
// 3. we can pass arguments when emitting event
// 4. even though you might not write you own event, events are a core building block of node
// first listen to event and then emit it
