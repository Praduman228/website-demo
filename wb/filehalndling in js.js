console.log("hello world");
const fs=require("fs");
var text=fs.readFileSync("newjs text.txt","utf-8");
console.log(text);
text=text.replace("tghis","this");
console.log("the new edited text is ");
console.log(text);
console.log("creating a new file..");
fs.writeFileSync("newjs(edited).txt",text);

