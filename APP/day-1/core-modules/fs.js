const fileSystem=require('fs');
const path=require('path');

// console.log('******Begin******');

// const fileContent=fileSystem.readFileSync('fsDemo.txt',{encoding:'utf8'});

// console.log(fileContent);

// console.log('******End******');

console.log('******Begin******');
const filePath=path.resolve(__dirname,'fsDemo.txt');
console.log(filePath);

fileSystem.readFile(filePath,{encoding:'utf8'},(error,response)=>{
    if(error){
        console.log("Error while reading file");
        console.log('Error:',error);        
        return;
    }
    console.log(response);
});

console.log('******End******');

console.log(__dirname);
console.log(__filename);