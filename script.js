const button = document.querySelector("#helloButton");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Thanks for reaching out to Toby Web Studio. I will reply as soon as I can.";
});
