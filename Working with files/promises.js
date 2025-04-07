import fs from "fs/promises"
fs.writeFile("pranali1.txt","another file")
let a= await fs.writeFile("pranali2.txt","helllllllll")
let b=await fs.readFile("pranali2.txt")
console.log(b.toString());
