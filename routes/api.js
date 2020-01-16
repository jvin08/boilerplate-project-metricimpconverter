/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if(initNum==null && initUnit!==null){
        res.json({data:{error:"invalid number"}, string:"Error - " + input})
      } else if(initNum!==null && initUnit==null){
        res.json({data:{error:"invalid unit"}, string:"Error - " + input})
      } else if(initNum==null && initUnit==null){
        res.json({data:{error:"invalid number and unit"}, string:"Error - " + input})
      } else {
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.json({data:{initNum:Number(initNum).toString(), 
                        initUnit:initUnit,
                        returnNum:Number(returnNum).toString(),
                        returnUnit:returnUnit,
                        string:toString},
                  string:toString})
      }
      });
    
};
