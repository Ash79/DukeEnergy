'use strict';
/*
* This file will not be changed by the generator
*/
var OrderData = {};
var OrderFD = require('../../sampleData/v1/Order.json');
OrderData = OrderFD;



exports.getOrder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    cb(null, OrderData);
}





exports.putOrder = function(args, res, next) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(OrderData).length > 0) {
        cb(null, OrderData[Object.keys(OrderData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.postOrder = function(args, res, next) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(OrderData).length > 0) {
        cb(null, OrderData[Object.keys(OrderData)[0]]);
    }
    else {
        cb(null, {})
    }
}


exports.patchOrder = function(args, res, next) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(OrderData).length > 0) {
        cb(null, OrderData[Object.keys(OrderData)[0]]);
    }
    else {
        cb(null, {})
    }
}



exports.deleteOrder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    if (Object.keys(OrderData).length > 0) {
        cb(null, OrderData[Object.keys(OrderData)[0]]);
    }
    else {
        cb(null, {})
    }
}


