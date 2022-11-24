const fs = require("fs");

function a() {
    return new Promise((resolve, reject) => {
        fs.readFile('./出师表.md', (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}
a().then((res) => {
    console.log(res.toString());
})