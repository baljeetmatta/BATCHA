// const EventEmitter=require("events");
// const event=new EventEmitter();
// event.on("Done",()=>{
//     console.log("Done handled");

// })
const obj=require("./emodule");
obj.event.on("Done",()=>{
console.log("Done handled");
})
obj.log();
