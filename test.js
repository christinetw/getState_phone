
/*const counter = function(max) {
  for (let i = 1; i <= max; i++) {
    console.log(i);
  }
};

const counter2 = function(current) {
  console.log(current);
  if (current < 5) {
    counter2(current + 1);
  }
}

//counter(5);
counter2(1, 5);*/

function jazzify(sentence) {
  let words = sentence.split(' ');
  for (const index in words) {
    words[index] = `${words[index]}🤗`;
  }
  console.log( words.join(' '));
}