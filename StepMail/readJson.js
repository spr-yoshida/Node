var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('members.json','utf8'));

obj.forEach(function(rec){
    console.log("Name:" + rec.Name + " Mail:" + rec.Mail + " Count:" + rec.Count);
});
