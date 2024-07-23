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
export async function getTabInnerText() {
    const tabId = await getTabId();
    if (!tabId) {
        return "";
    }

    let result;
    try {
        [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => document.documentElement.innerText,
        });
    } catch (e) {
        console.error(e);
        throw e;
    }
    return result;
}
