/*
*
*
*       Complete the handler logic below
*       
*       
*/
var unitPattern = /(gal|l|mi|km|lbs|kg)$/gi
var inputPattern = /^\s*(\d+\.?\d*)(\s*(\*|\-|\+|\/)\s*(\d+\.?\d*)\s*)*(gal|l|mi|km|lbs|kg)$/gi
var numberPattern = /^\s*(\d+\.?\d*)(\s*(\*|\-|\+|\/)\s*(\d+\.?\d*)\s*)*/gi
var expression = '  1 / 6 + 9 - 55 * 12 mi lbs kg'.match(numberPattern);

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var wholePattern = /^(\s*(\d*\.?\d*)((\*|\-|\+|\/)(\d*\.?\d*))*\s*)*(gal|l|mi|km|lbs|kg)$/gi
    var matchOne = /^\s*(gal|l|mi|km|lbs|kg)\s*$/gi
    var numberPattern = /^\s*(\d*\.?\d*)((\*|\-|\+|\/)(\d*\.?\d*))*/gi
    var match = input.match(numberPattern);
    input.match(wholePattern) == null ? (match == null ? result=null : result = match[0]) : result = match[0]
    if(matchOne.test(input)==true) { 
      result=1;
    } 
    try {
        eval(result)
      } 
      catch(err){
        result = null
      }
    
    return Number(eval(result)).toFixed(5);
  };
  
  this.getUnit = function(input) {
    var wholePattern = /^(\s*(\d*\.?\d*)((\*|\-|\+|\/)(\d*\.?\d*))*\s*)*(gal|l|mi|km|lbs|kg)$/gi
    var wholeMatch = input.match(wholePattern);
    var unitPattern = /(gal|l|mi|km|lbs|kg)$/gi;
    var result;
    var match = input.match(unitPattern)
    input.match(wholePattern) == null ? result=null : (match==null ? result=null : result=match[0].toLowerCase())
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = {'gal':'l', 'l':'gal', 'mi':'km', 'km':'mi', 'lbs':'kg', 'kg':'lbs'};
    
    return result[initUnit];
  };

  this.spellOutUnit = function(unit) {
    unit = unit.toLowerCase();
    var result = {'gal':'gallons','l':'liters', 'mi':'miles','km':'kilometers', 'lbs':'pounds','kg':'kilogramms'};
    return result[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = {'gal': initNum * galToL,
                  'l': initNum * 1/galToL,
                  'mi': initNum * miToKm,
                  'km': initNum * 1/miToKm,
                  'lbs': initNum * lbsToKg,
                  'kg': initNum * 1/lbsToKg
                 };
    console.log('typeOf: ' + result[initUnit] + ' is ' + typeof result[initUnit].toFixed(5))
    return Number(result[initUnit].toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    initNum = Number(initNum).toString();
    var newDecimalNum = Number(returnNum.toFixed(5)).toString()
    console.log('newDecimalNum: ' + newDecimalNum)
    var result = `${initNum} ${initUnit} converts to ${newDecimalNum} ${returnUnit}`;  
    return result;
  };
  
}

module.exports = ConvertHandler;
