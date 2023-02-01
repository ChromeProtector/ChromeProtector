function showSite(code) {
    chrome.action.setBadgeText({ text: "" });
    chrome.action.setIcon({ path: 'icons/' + code.toString() + '.png' });
}

function showSafeSite() {
    chrome.action.setBadgeText({ text: "" });
    chrome.action.setIcon({ path: 'icons/ok.png' });
}

//naive recursive implementation (for now)
function distance(word1, word2) {
    if (word1 == "") {
        return word2.length;
    }

    if (word2 == "") {
        return word1.length;
    }

    if (word1[0] == word2[0]) {
        return distance(word1.substring(1), word2.substring(1));
    }


    return 1
        + Math.min(
            Math.min(distance(word1.substring(1), word2), distance(word1, word2.substring(1))),
            distance(word1.substring(1), word2.substring(1)));

}

function analyze(domain) {
    chrome.storage.local.get({
        protected_words: ''
    }, function (items) {
        var words = items.protected_words.split(/\r?\n/);
        var domainWords = domain.match(/([^\./]+)/g)

        // show error if the domain contains word close to protected word
        if (domainWords != "" && domainWords != null) {
            for (i = 0; i < words.length; i++) {
                if (words[i] != "") {
                    for (j = 0; j < domainWords.length; j++) {
                        var computedDistance = distance(domainWords[j], words[i]);
                        var isVeryClose = computedDistance > 0 && computedDistance < 3;

                        if (isVeryClose) {
                            showSite(3);
                            return;
                        }
                    }

                }
            }
        }

        // show warning if the domain contains protected word
        if (words != null) {
            for (i = 0; i < words.length; i++) {
                if (words[i] != "" && domain.indexOf(words[i]) !== -1) {
                    showSite(2);
                    return;
                }
            }
        }

        showSafeSite();
    });
}


function update() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        if (tabs !== undefined && tabs.length > 0) {
            let domain = tabs[0].url.split("/")[2];

            if (domain.indexOf('xn--') != -1) {
                showSite(1);
            }
            else {
                analyze(domain);
            }
        }
    });
}

chrome.tabs.onUpdated.addListener(function () { update(); });
chrome.tabs.onActivated.addListener(function () { update(); });