"use strict";

{
  const moreScores = [77, 88];
  //スプレッド構文
  const scores = [70, 90, 80, 85, ...moreScores];
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
  // const scores = {
  //   math: 80,
  //   english: 90,
  // };
  // console.log(scores[`english`]);
  // scores.math = 40;
  // const entries = Object.entries(scores);
  // entries.forEach((entry) => {
  //   console.log(`${entry[0]}: ${entry[1]}`);
  // });
  // const prices = [100, 150, 200];
  // const pricesOver150 = prices.filter((price) => {
  //   return price >= 150;
  // });
  // console.log(pricesOver150);
  //分割代入
  // const [first, second, third, fourth] = scores;
  // let start = "Tokyo";
  // let goal = "Osaka";

  // [start, goal] = [goal, start];

  /////////////////
  const [first, ...others] = scores; //レスト構文
  console.log(others);

  const nums = [10, 20, 30];
  const numBackup = [...nums];
}
