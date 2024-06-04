/**
 * Retrieve search query from search input
 * @param {*} searchInput
 * @returns
 */
function getSearchQuery() {
    const searchInput = document.getElementById("search-input");
    return searchInput.value;
}

/** */
function search() {
    // const query = getSearchQuery();
    chrome.search.query({
        text: "test",
    });
    // return query;
}

/**
 *  Add event listeners on DOM load
 */
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    if (searchButton) {
        searchButton.addEventListener("click", search);
    }
    if (searchInput) {
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                search();
            }
        });
    }
});
