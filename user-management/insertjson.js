const fs = require("fs")
const fileName = "users.json";
const newUser = { name: "anu", age: 25 };
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  let users = JSON.parse(data);
  users.push(newUser);
  const updatedData = JSON.stringify(users, null, 2);
  fs.writeFile(fileName, updatedData, (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("New user added successfully!");
    }
  });
});
