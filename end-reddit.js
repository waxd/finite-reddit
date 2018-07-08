var limitPromise = browser.storage.sync.get({
    'redditLimit': 100
});
var rankNodes = document.getElementsByClassName("rank");
var rankLimit = 100;
limitPromise.then((result) => {
    var rankLimit = Number(result.redditLimit);
    for (var i = 0; i < rankNodes.length; i++) {
	var rank = Number(rankNodes[i].innerHTML);
	if (isNaN(rank) || rank > rankLimit) {
	    rankNodes[i].parentNode.setAttribute("hidden", "");
	}
    }
});
