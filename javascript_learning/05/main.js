"use strict";

{
  const n = Number(prompt("number?"));
  if (n >= 60) {
    console.log(`${Math.floor(n / 60)}時間${n % 60}分`);
  } else {
    console.log(`${n}分`);
  }
}
