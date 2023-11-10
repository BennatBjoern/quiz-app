const answerButtons = document.querySelectorAll(".answer-button");

answerButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let answerEl = this.nextElementSibling;

    if (answerEl.classList.contains("hidden")) {
      answerEl.classList.remove("hidden");
      this.textContent = "Close Answer";
    } else {
      answerEl.classList.add("hidden");
      this.textContent = "Show Answer";
    }
  });
});
