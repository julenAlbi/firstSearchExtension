function openFirstResult() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('source') === 'firstSeach') {
        const firstResult = document.querySelector('#search a');
        if (firstResult) {
            window.location.href = firstResult.href;
        }
    }
    
}

// To handle the case if we need to trigger it from background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openFirstResult") {
        openFirstResult();
    }
});

openFirstResult();