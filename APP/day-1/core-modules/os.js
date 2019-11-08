const os=require('os');

console.log(`Total Memory ${os.totalmem()}`);

console.log(`Available Memory ${os.freemem()}`);