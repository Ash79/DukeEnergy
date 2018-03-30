'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var ScheduleImplementation = require('../implementation/ScheduleService.js');
    
var ScheduleData;

        


        module.exports.getSchedule = function getSchedule (req, res, next) {
        var args = req.swagger.params;
        ScheduleImplementation.getSchedule(args, (error, data) => {
            ScheduleData = data;
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
        });
    };
    
                
        


    
            module.exports.postSchedule = function postSchedule (req, res, next) {
        var args = req.swagger.params;
        ScheduleImplementation.patchSchedule(args, (error, data) => {
            ScheduleData = data;
            if (Object.keys(ScheduleData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(ScheduleData[Object.keys(ScheduleData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        
    
