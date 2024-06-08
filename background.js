chrome.omnibox.onInputEntered.addListener((text) => {
    const query = encodeURIComponent(text);
    const url = `https://www.google.com/search?q=${query}&source=firstSeach`;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { url });
        }
    });
});