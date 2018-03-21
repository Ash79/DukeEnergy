'use strict';
/*
* This file will not be changed by the generator
*/
var CustomerData = {};
var CustomerFD = require('../../sampleData/v1/Customer.json');
CustomerData = CustomerFD;



exports.getCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    cb(null, CustomerData);
}





exports.putCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CustomerData).length > 0) {
        cb(null, CustomerData[Object.keys(CustomerData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.postCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CustomerData).length > 0) {
        cb(null, CustomerData[Object.keys(CustomerData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.patchCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CustomerData).length > 0) {
        cb(null, CustomerData[Object.keys(CustomerData)[0]]);
    }
    else {
        cb(null, {})
    }
}



exports.deleteCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(CustomerData).length > 0) {
        cb(null, CustomerData[Object.keys(CustomerData)[0]]);
    }
    else {
        cb(null, {})
    }
}


