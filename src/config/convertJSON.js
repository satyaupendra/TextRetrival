const convertJSON = function(data) {
  let stop_list = data.split(/\n+/);
  let re = /,/;
  let result = [];
  for (let i = 0; i < stop_list.length; i++) {
    result.push(stop_list[i].split(re));
  }
  //console.log(result);
  let arrayObject = result.map(function(item) {
    return {
      phoneNo: item[0],
      name: item[1],
      address: item[2],
      city: item[3],
      pincode: item[4]
    };
  });
  return arrayObject;
};
//console.log(convertJSON(data));
module.exports = convertJSON;
