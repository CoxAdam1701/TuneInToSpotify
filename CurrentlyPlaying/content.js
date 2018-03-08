// Inform the background page that 
// this tab should have a page-action
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction'
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    // First, validate the message's structure
    if ((msg.from === 'popup') && (msg.subject === 'SongInfo')) {
        // Collect the necessary data 
        var SongInfo = [document.getElementById('playerTitle').textContent, document.getElementById('playerArtwork').src]
        // Directly respond to the sender (popup), 
        // through the specified callback */
        response(SongInfo);
    }
});