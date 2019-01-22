

module.exports = function(year){
    // 4 & 400 not 100
    if (
       ( year % 4 === 0) && (year % 400 === 0 || year % 100 !== 0)
    ){
        return true
    }
    return false;
};