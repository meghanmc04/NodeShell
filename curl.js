module.exports = function (website) {
  const request = require("request");

  request(website, (err, response, HTMLbody) => {
    if(err){
      process.stdout.write(response);
      throw err;
    } else {
      process.stdout.write(HTMLbody);
      process.stdout.write("\nprompt > ")
    }
  })
}
