module.exports = function (fileName){
  const fs = require('fs');
   fs.readFile('./'+fileName,'utf8',(err,data)=>{
    if(err){
      throw err;
    } else{
      process.stdout.write(data);
      process.stdout.write("\nprompt > ")
    }
  })
}