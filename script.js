// console.log(global);

// global.setTimeout(() => {
//   console.log("in the set time out");
// });

// const init = setInterval(() => {
//   console.log("in the interval");
// }, 1000);

// console.log(__dirname);
// console.log(__filename);

const people = ["Nata", "Oksi", "Kari", "Kate"];
const ages = [20, 23, 43, 35];
console.log(people);

module.exports = {
    people, ages
};

const os = require("os");
console.log(os.platform(), os.homedir());
