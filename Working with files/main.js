const fs=require("fs");
// console.log(fs);
console.log('start');
// creating file
fs.writeFile("pranali.txt","she is a good girl", ()=>{
    console.log('file created');
    //reading file
    fs.readFile("pranali.txt", (error,data)=>{
    console.log(error,data.toString());
    // when you keep doing creating and reading files in a callback then that situation is call back hell
    })
})
// console.log(fs);
console.log('end');
//appending 
fs.appendFile("pranali.txt","pranaliiiiiii",(e,d)=>{
           console.log(d);
           
})