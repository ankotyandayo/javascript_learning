"use strict";

{
  // const scores = [70, 90, 80, 85];
  // let total = 0;
  // scores.forEach((score, index) => {
  //   total += score;
  // console.log(`${index}: ${score}`);
  // });
  // console.log(`total: ${total}`);
  // console.log(`average: ${total / scores.length}`);
  //   scores.push(77, 88);
  //   for (let i = 0; i < scores.length; i++) {
  //     console.log(scores[i]);
  //   }
  //   scores.push(10);
  //   scores.pop(10);
  //   scores.unshift(10);
  //   scores.shift(10);

  const scores = {
    math: 80,
    english: 90,
  };
  console.log(scores[`english`]);
  scores.math = 40;
  const entries = Object.entries(scores);
  entries.forEach((entry) => {
    console.log(`${entry[0]}: ${entry[1]}`);
  });
  // console.log(scores.math);
}