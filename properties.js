
let data = {
  name : "john",
  age : 23,
  address: {
    city : "Toronto",
    coords : {
      latitude : 30,
      longitutde: 45
    }
  }
}

const printProperties = function(data){
  for(let objkey in data){
    let value = data[objkey];
    if (typeof(value) !== 'object') {
      console.log(objkey + " = " + value);
    }
    else {
      printProperties(value);
    }
  }

}

printProperties(data);
