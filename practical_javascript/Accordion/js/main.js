"use strict";

{
  const dts = document.querySelectorAll("dt");
  dts.forEach((dt) => {
    dt.addEventListener("click", () => {
      // toggle は　付け外しできる　parentNodeは親クラス　つまりdivのこと
      dts.forEach((el) => {
        if (dt !== el) {
          el.parentNode.classList.remove("appear");
        }
      });
      dt.parentNode.classList.toggle("appear");
    });
  });
}
