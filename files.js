// importing file system module
const fs = require("fs");

// reading files
fs.readFile("./blog.txt", (ERR, DATA) => {
  if (ERR) {
    console.log(ERR);
  }
  console.log(DATA.toString()); // Buffer
});
console.log("Last Line ..."); //runs before  line 5

// writing files
fs.writeFile("./blog.txt", "Abrakadabra", () => {
  console.log("File was written"); //replaced with Abrakadabra
});

fs.writeFile("./blog1.txt", "Abrakadabra Chari Bari Fuck", () => {
  console.log("File was written"); //creates new file blog1.txt
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Created"); //Creates Folder
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Deleted"); //Deletes Folder
  });
}

// deleting files
if (fs.existsSync("./deleteMe.txt")) {
  fs.unlink("deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File Deleted");
  });
}
