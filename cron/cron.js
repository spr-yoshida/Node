var c = require('cron').CronJob;
var job = new c({
    cronTime : '*/1 * * * * *',
    onTick : function (){
        var f = require('./func.js');
        console.log(f.func());
    },
    start : false,
    timeZone : 'Asia/Tokyo'
});

job.start();
