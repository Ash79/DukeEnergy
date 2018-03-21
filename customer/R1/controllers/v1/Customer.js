'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var CustomerImplementation = require('../implementation/CustomerService.js');
    
var CustomerData;

        


        module.exports.getCustomer = function getCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.getCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                                                                        console.log('Start Pagination......');
                paginationService.getPages(args.pageNumber.value, args.pageSize.value, CustomerData).then(function(result) {
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
    
                
        


    
                module.exports.putCustomer = function putCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.patchCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postCustomer = function postCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.patchCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        


    
        module.exports.patchCustomer = function patchCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.patchCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
                
            module.exports.deleteCustomer = function deleteCustomer (req, res, next) {
        var args = req.swagger.params;
        CustomerImplementation.deleteCustomer(args, (error, data) => {
            CustomerData = data;
            if (Object.keys(CustomerData).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                              res.end(JSON.stringify(CustomerData[Object.keys(CustomerData)[0]] || {}, null, 2));
            } else {
                res.end();
            }

        });
    };
    


    
                
        
    
