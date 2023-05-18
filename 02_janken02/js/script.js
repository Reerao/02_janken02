
const buttonStop = document.querySelector("button");
const animationElement = document.querySelector(".laundryset");
const HTML = document.querySelector("html");

animationElement.addEventListener("animationiteration", () => {
  const animationCount = Number(getComputedStyle(HTML).getPropertyValue("--animationCount"));
  HTML.style.setProperty("--animationCount", animationCount + 1);
});


buttonStop.addEventListener("click", () => {
    animationElement.classList.remove("on-animation");
    animationElement.classList.add("is-stopped");
    animationElement.addEventListener("animationend", (event) => {
      if (event.animationName === "guru") {
        animationElement.classList.remove("is-stopped");
        HTML.style.setProperty("--animationCount", 1);
      }
    });

  });

// $("#stop-btn").on("click",function(){
//     $("#stop-btn").text("回収する");
//     $("#stop-btn").css("content","回収する");
//   });

  $("#stop-btn").on("click", function () {
    // 新しいcontentの値を設定
    const newContent = "回収する";
    $("#stop-btn").text(newContent);

    // alert("msg");
    // console.log("1111111");

    // 要素を取得します
    const element = document.querySelector("#stop-btn");

    // カスタムCSS変数の値を更新します
    element.style.setProperty("--custom-content",`'${newContent}'`);
});

