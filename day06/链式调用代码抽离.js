const fs = require("fs");

function p(url){
    return new Promise(function(resolve, reject){
        fs.readFile(url, (err, data) =>{
            if (err) reject(err);
            resolve(data);
        })
    })
}
p('./桃花源记.md').then(res => {
    // console.log(res.toString());
    return res.toString()
}).then((data) => {
    console.log(data, '15');
    p('./出师表.md').then(res => {
        console.log(res.toString());
    })
})