const fs = require("fs");

async function delJson() {

  await (async function() {
    const path = "D:/web_scarper/data.json";

      try {
        fs.unlinkSync(path);
        console.log("File removed:", path);
      } catch (err) {
        console.error(err);
      }
    
  })()
}



module.exports = delJson