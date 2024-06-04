/**
 * Get the tab ID of current active tab
 * @returns tab.id
 */
async function getTabId() {
    let queryOptions = { active: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}

/**
 * Retrieve the inner text from all HTML elements on current active tab
 * @returns string value of all inner text
 */
globalThis.getTabInnerText = async () => {
    const tabId = await getTabId();
    let result;
    try {
        [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => document.documentElement.innerText,
        });
    } catch (e) {
        console.error(e);
        return e;
    }
    return result;
};
