const fs = require("fs");

function aa () {
    return new Promise(function(resolve, reject){
        fs.readFile('./出师表.md', (err, data) =>{
            if (err) reject(err);
            resolve(data);
        })
    })
}

function bb () {
    return new Promise(function(resolve, reject){
        fs.readFile('./桃花源记.md', (err, data) =>{
            if (err) reject(err);
            resolve(data);
        })
    })
}

aa().then((res) => {
    // console.log(res.toString());
    return res.toString();
}).then((data) =>{
    console.log(data, '27');
    bb().then((res) => {
        console.log(res.toString());
    })
})