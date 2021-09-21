const badToGood = {
  milk: "oat milk",
};
// const badToGood = "milk";

function run() {
  function replace(body, from, to) {
    if (body.childNodes.length) {
      body.childNodes.forEach((child) => replace(child, from, to));
    } else {
      const cont = body.textContent;
      if (cont) body.textContent = cont.replace(from, to);
    }
  }
  replace(document.body, new RegExp("milk", "gi"), "oat milk");
}
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: run,
  });
});
