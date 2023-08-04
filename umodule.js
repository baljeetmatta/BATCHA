// const EventEmitter=require("events");
// const event=new EventEmitter();
// event.on("Done",()=>{
//     console.log("Done handled");

// })


/*
const obj=require("./emodule");
obj.event.on("Done",()=>{
console.log("Done handled");
})
obj.log();
*/

let Logger=require("./emodule");
let obj=new Logger();
obj.on("Done",()=>{
    console.log("Done handler");
})
obj.log();
