function showUnsafeSite()
{
	chrome.action.setBadgeText({text: "X"});		
	chrome.action.setIcon({path: 'icons/unsafe.png'});
}

function showSafeSite()
{
	chrome.action.setBadgeText({text: "OK"});
	chrome.action.setIcon({path: 'icons/ok.png'});
}

function update()
{
	chrome.tabs.query({active:true, lastFocusedWindow: true}, tabs => {
		if (tabs !== undefined && tabs.length > 0)
		{
			let url = tabs[0].url;
			
			if (url.indexOf('xn--') != -1)
			{
				showUnsafeSite();
			}
			else
			{
				showSafeSite();
			}
		}
	});
}

chrome.tabs.onUpdated.addListener(function(){ update(); });
chrome.tabs.onActivated.addListener(function(){	update(); });