(async () => {
  const input = document.querySelector("#toggle_input");
  input.checked = await chrome.runtime.sendMessage("get-enabled");

  input.addEventListener("click", () => {
    const state = input.checked ? "enable" : "disable";
    chrome.runtime.sendMessage("set-to-" + state);

    if (!input.checked) {
      return;
    }

    // Close chat only for active tab
    // chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    //   chrome.tabs.sendMessage(tabs[0].id, "close-chat").catch(error => {});
    // });

    // Close chat for all tabs
    chrome.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, "close-chat").catch(error => {});
      });
    });
  });
})();
