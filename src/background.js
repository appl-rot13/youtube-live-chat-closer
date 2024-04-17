(() => {
  const isEnabled = "isEnabled";

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message) {
      case "set-to-enable":
        chrome.storage.local.set({ [isEnabled]: true });
        break;

      case "set-to-disable":
        chrome.storage.local.set({ [isEnabled]: false });
        break;

      case "get-enabled":
        chrome.storage.local.get([isEnabled]).then(ret => {
          sendResponse((isEnabled in ret) ? ret[isEnabled] : true);
        });
        return true;
    }
  });
})();
