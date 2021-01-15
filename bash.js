process.stdout.write("prompt >");
process.stdin.on("data", (data) => {

  const cmd = data.toString().trim();

   if(cmd === "pwd"){
     const pwd = require('./pwd');
     pwd();

   }else if (cmd === 'ls'){
       const ls = require('./ls');
       ls();
   }else if (cmd.includes('cat')){
     const cat = require('./cat')
    const catFile = cmd.split(' ');
     cat(catFile[1]);
   }

   else {
    process.stdout.write("you typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
})
