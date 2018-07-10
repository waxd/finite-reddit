/*
 * Write the options to storage.
 */
function saveOptions(event) {
    browser.storage.sync.set({
	redditLimit: document.querySelector("#reddit-limit").value
    });

    browser.storage.sync.set({
	finiteRedditDisabled: document.querySelector("#disable-finite-reddit").checked
    });
    
    event.preventDefault();
}

/*
 * Read the options from storage and populate the forms with the previous values.
 */
function restoreOptions() {
    var limitPromise = browser.storage.sync.get({
	"redditLimit": 100
    });
    limitPromise.then((result) => {
	document.querySelector("#reddit-limit").value = result.redditLimit;
    });

    var disabledPromise = browser.storage.sync.get({
	"finiteRedditDisabled": false
    });
    disabledPromise.then((result) => {
	document.querySelector("#disable-finite-reddit").checked =
	    result.finiteRedditDisabled;
    });
}

document.addEventListener("DOMContentLoaded", restoreOptions);  // Populate the form on load.
document.querySelector("form").addEventListener("submit", saveOptions);  // Save the settings when the form is submitted.
