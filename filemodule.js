const fs = require("fs");
//console.log(fs);
/*
let contents=fs.readFileSync("./script1.js","utf-8");
console.log(contents);
console.log("Reading..");

*/

// fs.readFile("./script1.js","utf-8",(err,data)=>{

//     console.log(data);
// });
// console.log("REading...");
// function sum(a,b)
// {
//     console.log(a,b);
// }
// sum(10,12,3);
/*
const abc=fs.readFile();
console.log(abc);

fs.writeFileSync("./data.txt","Hello to node");
fs.writeFile("./data.txt","Hello to node",(err)=>{

})
*/
function search(path) {
    fs.readdir(path, (err, files) => {
        //console.log(files);
        if (!err) {
            files.forEach((item) => {
                console.log(path + "/" + item);
                search(path + "/" + item);
            })
        }


    })

}

search(".");
