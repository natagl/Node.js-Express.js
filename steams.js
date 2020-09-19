const fs = require("fs");
//starting reading data
const readStream = fs.createReadStream("./blog2.txt", {
  encoding: "utf8", // encodes data into a readable format
});
const writeStream = fs.createWriteStream("./blog3.txt");

//
// readStream.on("data", (chunk) => {
//   console.log("---- NEW CHUNK ----");
//   console.log(chunk);
// // \n -> new line
//   writeStream.write("\nNEW CHUNK:\n");//passing data down to the stream
//   writeStream.write(chunk);//takes chunk from readStream.on(chunk) and writes into new file
// });

// piping
readStream.pipe(writeStream);
