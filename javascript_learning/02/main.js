"use strict";

{
  // 関数宣言　コードのどこに書いても実行時にはコードの先頭に書いたことになる
  //   function double(number) {
  //     // カリ引数
  //     return number * 2;
  //   }
  // 関数式、無名関数
  //   const double = function (number) {
  //     return number * 2;
  //   };
  //アロー関数
  //   const double = (number) => {
  //     return number * 2;
  //   };
  //より短いやつ
  const double = (number) => number * 2;
  console.log(double(10)); //実引数

  function calculateTotal(price, amount, rate = 1.1) {
    if (amount >= 100) {
      //早期リターン
      return price * amount;
    }
    return price * amount * rate;
  }

  console.log(calculateTotal(100, 100));
  console.log(calculateTotal(1000, 10, 1.1));
}
