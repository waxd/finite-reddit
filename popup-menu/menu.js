function saveOptions(event) {
    browser.storage.sync.set({
	redditLimit: document.querySelector("#reddit-limit").value
    });
    event.preventDefault();
}

function restoreOptions() {
    var limitPromise = browser.storage.sync.get({
	'redditLimit': 100
    });
    limitPromise.then((result) => {
	document.querySelector("#reddit-limit").value = result.redditLimit;
    });

}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
