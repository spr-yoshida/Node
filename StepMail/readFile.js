var fs = require('fs');
fs.readdir('.',function(err,files){
    if (err) throw err;
    var fileList = [];
    files.filter(function(file){
        return fs.statSync(file).isFile() && /.*.txt$/.test(file);
    }).forEach(function(file){
        fileList.push(file);
    });

    console.log(fileList);

    var messageList = [];
    fileList.forEach(function(name){
        console.log(name);

        fs.readFile(name,'utf8',function(err,text){
            if (err) throw err;
            messageList.push(text);
            console.log(text);
        })
    })
});
