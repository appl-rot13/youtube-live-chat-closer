(async () => {
  const enabled = await chrome.runtime.sendMessage("get-enabled");
  if (!enabled) {
    return;
  }

  const closeButton = document.querySelector("#close-button button");
  if (!closeButton) {
    return;
  }

  const event = document.createEvent("MouseEvents");
  event.initEvent("click", true, true);
  closeButton.dispatchEvent(event);
})();
