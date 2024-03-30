"use strict";

{
  class User {
    // プロパティの一覧を書いておく　フィールドと呼ぶ
    name;
    // 内部的には別の名前にする そうしないとゲッターをするたびに呼ばれてしまう。
    //# パウンド記号にすると外から変更できなくなる カプセル化と呼ぶ
    #score;
    // クラス全体で値を保持したい インスタンスごとではなくて

    constructor(name, score) {
      this.name = name;
      this.#score = score;
    }
    // scoreの値を所得した時に自動的に呼ばれる
    // get score のscoreは呼ばれた時の引数名と同じ
    get score() {
      return this.#score;
    }

    #isValueValid(newValue) {
      return newValue < 0 || newValue > 100 ? false : true;
    }
    // scoreに値をセットした時に自動的に呼ばれる
    set score(newValue) {
      if (this.#isValueValid(newValue) === false) {
        console.log("Invalid Value");
        return;
      }
      this._score = newValue;
    }
  }
  //インスタンス化
  const user = new User("Taro", 70);

  user.score = 220;
  console.log(user.score);
  // 外からは使えない
  console.log(user.isValueValid(50));
}
