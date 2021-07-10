const fs = require("fs");

let text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

let text2 = "Contrary to popular belief, Lorem Ipsum is not simply random text.";

fs.writeFile("text.txt", text1, (err, data) => {

})

fs.readFile("text.txt", "utf-8", (err, data) => {
    console.log(data);
})


fs.writeFileSync("text.txt", text2,);

const read_file = fs.readFileSync("text.txt", "utf-8");

console.log(read_file);