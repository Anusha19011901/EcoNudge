chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SHOW_NUDGE") {
    chrome.tabs.sendMessage(sender.tab.id, {
      type: "DISPLAY_NUDGE",
      keyword: message.keyword
    });
  }
});
