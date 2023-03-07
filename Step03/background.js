var hander1;
var path = chrome.runtime.getURL('bundle.js')
importScripts(path)

function updateIcon(name, text) {
    chrome.action.setBadgeText({ text: text })
    chrome.action.setIcon({ path: 'icons/' + name + '.png' })
}

function clear() {
    if (hander1 != undefined) {
        clearInterval(hander1)
        hander1 = undefined
    }
}

function showOk() {
    clear()
    updateIcon('ok', '')
}

function showDanger() {
    clear()

    hander1 = setInterval(function () {
        const date = new Date();    
        var flag = (date.getMilliseconds() / 100) > 5
        updateIcon(flag ? 'attack' : 'ok', flag ? 'i': '')
    }, 100)
}

function analyze(tab) {

    if (tab.url == "" || tab.url.indexOf("chrome://") == 0)
    {
        showOk()
        return
    }

    let domain = typosquatting.getDomain(tab.url)
    if (domain == "newtab")
    {
        showOk()
        return
    }

    const svmClassifier = 2
    const dummyClassifier = 1

    chrome.storage.local.get({
        protected_domains: '',
        svm_model: ''
    }, function (items) {
        var protected_domains = items.protected_domains.split(/\r?\n/)
        var svmModels = items.svm_model.split(/\r?\n/)
        for (var i = 0; i < protected_domains.length; i++) {
            if (svmModels[i] == "") continue
            if (protected_domains[i] == "") continue

            var protectedDomain = protected_domains[i]
            var svmModel = JSON.parse(svmModels[i])

            var dummyResult = typosquatting.decideExt(domain, dummyClassifier, protectedDomain, null) 
            var svmResult = typosquatting.decideExt(domain, svmClassifier, protectedDomain, svmModel)
            if ((dummyResult == 1 || dummyResult == -1) && svmResult == 1) {
                showDanger()    
                return
            }
        }
        showOk()
    })
}

function update() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        if (tabs !== undefined && tabs.length > 0) {
            showOk()
            analyze(tabs[0])
        }
    })
}

chrome.tabs.onUpdated.addListener(function () { update() })
chrome.tabs.onActivated.addListener(function () { update() })