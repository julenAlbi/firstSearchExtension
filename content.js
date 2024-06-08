console.log('holaaaa');

function openFirstResult() {
    // const firstResult = document.querySelector('a[href^="http"]');
    // console.log('firstResult: ', firstResult);
    // if (firstResult) {
    //     window.location.href = firstResult.href;
    // }
    //  Get the first a element that is inside the div with id 'search'
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('source') === 'firstSeach') {
        const firstResult = document.querySelector('#search a');
        console.log('firstResult: ', firstResult);
        if (firstResult) {
            window.location.href = firstResult.href;
        }
    }
    
}

// To handle the case if we need to trigger it from background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('request.action: ', request.action);
    if (request.action === "openFirstResult") {
        openFirstResult();
    }
});

openFirstResult();