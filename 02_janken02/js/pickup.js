
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
