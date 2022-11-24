const fs = require("fs");

function aa () {
    return new Promise(function(resolve, reject){
        reject('我是出师表的错误信息')
    })
}

function bb () {
    return new Promise(function(resolve, reject){
        reject('我是桃花源记的错误信息')
    })
}

aa().catch( err => {
    console.log(err, '16');
})
bb().catch(err => {
    console.log(err, '19');
})
