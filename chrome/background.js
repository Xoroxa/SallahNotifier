chrome.runtime.onInstalled.addListener(function() {
    console.log("Started");
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes("classroom.google.com/u/0")) {
        let tabUrl = tab.url;
        let splitUrl = tabUrl.split('');
        splitUrl[31]= '2';
        let newUrl = splitUrl.join('');

        console.log(tabUrl);
        console.log(newUrl);

        chrome.tabs.update(tab.id, {url: newUrl});
    }
});