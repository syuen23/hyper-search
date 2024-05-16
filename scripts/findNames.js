async function getTabId() {
    let queryOptions = { active: true };

    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}

async function getTabInnerText() {
    const tabId = await getTabId();
    let result;
    try {
        [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => document.documentElement.innerText,
        });
    } catch (e) {
        console.log(e);
        return e;
    }
    console.log(result);
    return result;
}

const searchButton = document.querySelector("#search-btn");

if (searchButton) {
    searchButton.addEventListener("click", getTabInnerText);
}
