
const func1 = function(num) {
  console.log(num);
};

let array = [1, 2, 3];

array.forEach(func1);
//===============================
const func2 = function(num) {
  console.log(num + "!");
};

[1, 2, 3].forEach(func2);
//===============================

[1, 2, 3].forEach(function(num) {
  console.log(num + "?");
});
//===============================
[1, 2, 3].forEach((num) => {
    console.log(num + "$");
});
//===============================
array.forEach(num => {console.log(num)});