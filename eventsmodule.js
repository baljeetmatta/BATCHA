const EventEmitter=require("events");
//Reference to Class
//EventEmitter obj;
//EventEmitter obj=new EventEmitter();

//int a=10;
let  obj=new EventEmitter();


obj.on("Login",(e)=>{
    console.log("Event Rec.",e);
})
obj.on("Logout",()=>{
    console.log("Logout called");
})

obj.emit("Login",{name:"test",age:20});
obj.emit("Logout");