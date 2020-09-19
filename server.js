const http = require("http");
const fs = require("fs");

// Load the full build.
const _ = require('lodash');
// Load the core build.
// const _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
const fp = require('lodash/fp');

const server = http.createServer((req, res) => {
  // console.log(req);
//   console.log(req.url);
const num = _.random(0, 20);
console.log(num);

const   greet = _.once(()=> {
    console.log('Hello');
});

greet();

  // set header content type
  res.setHeader("Content-Type", "text/html");

  // res.write('<p>hello, it is Nata</p>');
  // res.write('<p>hello again, it is me</p>');
  // res.end();

  // send html file
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data);
  //   res.end(data);
  // });

  // routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200; //ok
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200; //ok
      break;
    case "/about-us": //redirection to about
      res.statusCode = 301; //rosource was moved
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404; //not found
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
});
// localhost is the default value for 2nd argument(port number 3000)
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
