(() => {
  let enabled = true;

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message) {
      case "set-to-enable":
        enabled = true;
        break;

      case "set-to-disable":
        enabled = false;
        break;

      case "get-enabled":
        sendResponse(enabled);
        break;
    }
  });
})();
