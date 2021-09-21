const badToGood = {
  milk: "oat milk",
  butter: "vegan butter",
  egg: "flax egg",
  mince: "soy mince",
};

function run() {
  function replace(body, from, to) {
    if (body.childNodes.length) {
      body.childNodes.forEach((child) => replace(child, from, to));
    } else {
      const cont = body.textContent;
      if (cont) body.textContent = cont.replace(from, to);
    }
  }

  for (const [bad, good] of Object.entries(badToGood)) {
    replace(document.body, new RegExp(bad, "gi"), good);
  }
}
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: run,
  });
});
