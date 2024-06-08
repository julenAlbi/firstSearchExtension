chrome.omnibox.onInputEntered.addListener((text) => {
	console.log('Entered text: ', text);
    const query = encodeURIComponent(text);
	console.log('query :>> ', query);
    const url = `https://www.google.com/search?q=${query}&source=firstSeach`;
	console.log('url :>> ', url);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { url });
        }
    });
});