const fs = require('fs');
fs.readFile('xyz.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error occur!");
        return;
    }

    const words = data.trim().split(/\s+/);
    const wordCount = words.length;

     fs.writeFile('yz.txt', `Total words: ${wordCount}`, (err) => {
        if (err) {
            console.log("error occur!");
            return;
        }
        console.log("Done! Output 'yz.txt' ");
    });
})