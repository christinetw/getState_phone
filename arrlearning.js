/*
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

const newarr = function (obj) {
  let result = [];
  for (let objkey in obj) {

    result.push([objkey, obj[objkey]])

  }
  return result;

}
console.log(newarr(obj));
*/
////////////////
/*
let vals = [1, 2, 5, 7, 6, 2];
let newobj = {};

for (let i = 0; i < vals.length; i += 2) {
  let key = vals[i];
  let value = vals[i + 1];
  newobj[key] = value;
}

console.log(newobj);
*/
/*
let data = {
  'dave': 20,
  'alison': 30,
  'bob': 21
};

let newobj = {};
let newarr = [];
for (let objkey in data) {
  newarr.push(objkey);
}
newarr.sort();
for (let i = 0; i < newarr.length; i++) {
  newobj[newarr[i]] = data[newarr[i]];
}
console.log(newobj);
*/

let data = {
  scores: [7, 4, 3, 1],
  values: [100, 50, 200, -1],
  numbers: ['xyz', 'def', '123']
};

let newobj = {};
for (let objkey in data) {
  data[objkey].sort();
}

console.log(JSON.stringify(data));






