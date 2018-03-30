'use strict';
/*
* This file will not be changed by the generator
*/
var ScheduleData = {};
var ScheduleFD = require('../../sampleData/v1/Schedule.json');
ScheduleData = ScheduleFD;



exports.getSchedule = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    cb(null, ScheduleData);
}




exports.postSchedule = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(ScheduleData).length > 0) {
        cb(null, ScheduleData[Object.keys(ScheduleData)[0]]);
    }
    else {
        cb(null, {})
    }
}

