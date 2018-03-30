'use strict';
  var ScheduleFD = require('../../sampleData/v1/Schedule.json');
  var ScheduleData = ScheduleFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getSchedule = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(ScheduleData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, ScheduleData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}




exports.postSchedule = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(ScheduleData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(ScheduleData[Object.keys(ScheduleData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}

