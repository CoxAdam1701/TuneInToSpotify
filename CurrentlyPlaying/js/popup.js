// Update the relevant fields with the new data
function getSongInfo(info) {
  document.getElementById('nowPlaying').textContent = info[0];
  document.getElementById('main-image').src = info[1];
  FullSongTitle = info[0];
  document.getElementById('spotURL').setAttribute("href", SpotifySearchURL+FullSongTitle);
  document.getElementById('googleSearch').setAttribute("href", GoogleSearchURL+FullSongTitle);
}
var FullSongTitle = '';
var SpotifySearchURL= "https://open.spotify.com/search/results/"
var GoogleSearchURL= "https://www.google.com/search?q="
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
