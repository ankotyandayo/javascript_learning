"use strict";

{
  class User {
    // プロパティの一覧を書いておく　フィールドと呼ぶ
    name;
    score;
    // クラス全体で値を保持したい インスタンスごとではなくて
    static count = 0;

    constructor(name, score) {
      this.name = name;
      this.score = score;
      // static のプロパティは先頭にクラス名を付ける
      User.count++;
    }

    getUserString() {
      return `${this.name} ${this.score}`;
    }

    static getUserCountString() {
      return `${User.count} instance(s) created`;
    }
  }
  //インスタンス化
  const user1 = new User("Taro", 70);
  const user2 = new User("Jiro", 80);
  console.log(User.getUserCountString());

  console.log(user1.getUserString());
  console.log(user2.getUserString());
}
