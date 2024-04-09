(() => {
  const closeButton = document.querySelector("#close-button button");
  if (!closeButton) {
    return;
  }

  const event = document.createEvent("MouseEvents");
  event.initEvent("click", true, true);
  closeButton.dispatchEvent(event);
})();
