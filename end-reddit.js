var rankNodes = document.getElementsByClassName("rank");

for (var i = 0; i < rankNodes.length; i++) {
    var rank = rankNodes[i].innerHTML;
    if (rank > 100) {
	rankNodes[i].parentNode.setAttribute("hidden", "");
    }
}
