const test = function(myCallback) {
  myCallback();
};

const hello = function() {
  console.log("hello");
};

test(hello);

test(() => { 
  console.log("bump"); 
});