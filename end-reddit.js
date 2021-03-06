/*
 * Hides all the posts above the provided rank limit.
 */
function filterPosts(rankLimit) {
    var rankNodes = document.getElementsByClassName("rank");
    for (var i = 0; i < rankNodes.length; i++) {
	var rank = Number(rankNodes[i].innerHTML);
	// non-number ranks are always hidden.
	if (isNaN(rank) || rank > rankLimit) {
	    rankNodes[i].parentNode.setAttribute("hidden", "");
	}
    }
}

// Read the Reddit limit from storage.
var limitPromise = browser.storage.sync.get({
    "redditLimit": 100
});

// Read the disabled setting from storage.
var disabledPromise = browser.storage.sync.get({
    "finiteRedditDisabled": false
});

disabledPromise.then((result) => {
    // Don't change anything if the extension is disabled.
    if (!result.finiteRedditDisabled) {
	// Apply the rank limit to the posts on the page.
	limitPromise.then((result) => {
	    var rankLimit = Number(result.redditLimit);
	    filterPosts(rankLimit);
	});
    }
});

