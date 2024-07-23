import { initiateSearchQuery } from "./content/search";

/**
 *  Add event listeners on DOM load
 */
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    if (searchButton) {
        searchButton.addEventListener("click", initiateSearchQuery);
    }
    if (searchInput) {
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                search();
            }
        });
    }
});
