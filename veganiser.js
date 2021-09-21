function run() {
  const badToGood = {
    milk: "oat milk",
    "egg ": "flax egg",
    mince: "soy mince",
    "minced beef": "soy mince",
    chicken: "marinated tofu",
    lamb: "marinated tofu",
    pork: "marinated tofu",
    veal: "marinated tofu",
    meat: "meat-free ",
    cheese: "dairy-free cheese",
    "sour cream": "oat cream",
    "creme fraiche": "oat cream",
    con: "sin",
    beef: "seitan",
    yoghurt: "soya yogurt",
    yogurt: "soya yogurt",
    cream: "oat cream",
    mozzarella: "vegan mozarella",
    dairy: "dairy-free",
    butter: "dairy-free butter",
  };
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
