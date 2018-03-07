// Update the relevant fields with the new data
function getSongInfo(info) {
  document.getElementById('total').textContent = info;
  FullSongTitle = info;
}
var FullSongTitle = '';
// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the Song info...
    chrome.tabs.sendMessage(
      tabs[0].id,
      { from: 'popup', subject: 'SongInfo' },
      // ...also specifying a callback to be called 
      //    from the receiving end (content script)
      getSongInfo);
  });
});

// document.getElementById('search').onclick(
//   window.open('http://google.com/search?q='+FullSongTitle,'_newtab')
// )