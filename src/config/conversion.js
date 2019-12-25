const conversion = function(data, searchele) {
  var stop_list = data.split(/\n+/);
  var re = /,/;
  var result = [];
  for (let i = 0; i < stop_list.length; i++) {
    result.push(stop_list.shift().split(re));
  }
  for (let i = 0; i < result.length; i++) {
    if (searchele == result[i][0]) {
      const objectresult = Object.assign({}, result[i]);
      return objectresult;
    }
  }
};
module.exports = conversion;
