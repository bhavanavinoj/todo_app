const fs = require('fs');
fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
    const users = JSON.parse(data);
    console.log("Users object:", users);
});
