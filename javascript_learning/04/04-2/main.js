"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    // document.querySelector("#third").textContent = "changed";
    // document.querySelectorAll(".target").forEach((value) => {
    //   value.textContent = "Changed";
    // });
    //　リストの追加、削除
    const liElement = document.createElement("li");
    liElement.textContent = "Hanakko";
    document
      .querySelector("ul")
      .insertBefore(liElement, document.querySelector("#third"));
  });
}
