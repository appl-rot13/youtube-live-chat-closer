(async () => {
  const input = document.querySelector("#toggle_input");
  input.checked = await chrome.runtime.sendMessage("get-enabled");

  input.addEventListener("click", () => {
    const state = input.checked ? "enable" : "disable";
    chrome.runtime.sendMessage("set-to-" + state);
  });
})();
