// content.js
// List of keywords to trigger a nudge
const keywords = ["shein", "zara", "netflix", "plastic water bottle"];

// Check page content for keywords
const found = keywords.find(keyword =>
  document.body.innerText.toLowerCase().includes(keyword)
);

// If a keyword is found, send a message to the background script
if (found) {
  chrome.runtime.sendMessage({ type: "SHOW_NUDGE", keyword: found });
}

// Listen for messages from the background script to display the nudge
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "DISPLAY_NUDGE") {
    const div = document.createElement("div");
    div.innerText = `🌱 Try a greener alternative for "${message.keyword}"`;
    div.style.position = "fixed";
    div.style.bottom = "20px";
    div.style.right = "20px";
    div.style.backgroundColor = "#e8f5e9";
    div.style.color = "#1b5e20";
    div.style.padding = "12px 20px";
    div.style.borderRadius = "8px";
    div.style.zIndex = "9999";
    div.style.fontWeight = "bold";
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 6000);
  }
});
