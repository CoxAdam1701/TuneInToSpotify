//Set variables
var FullSongTitle = '';
var SpotifySearchURL= "https://open.spotify.com/search/results/"
var GoogleSearchURL= "https://www.google.com/search?q="
var PlayMusicSearchURL= "https://play.google.com/music/listen?u=1#/sr/"
var YouTubeSearchUrl = "https://www.youtube.com/results?search_query="
//Callback funtion to update the popup fields with the data from TuneIn
function getSongInfo(info) {
  //set search text
  document.getElementById('nowPlaying').textContent = info[0];
  //set album artwork pulled from page
  document.getElementById('albumArt').src = info[1];
  //set radio station title
  document.getElementById('radioStation').textContent = info[2];
  FullSongTitle = info[0];
  document.getElementById('spotifySearch').setAttribute("href", SpotifySearchURL+FullSongTitle);
  document.getElementById('googleSearch').setAttribute("href", GoogleSearchURL+FullSongTitle);
  document.getElementById('playMusicSearch').setAttribute("href", PlayMusicSearchURL+FullSongTitle);
  document.getElementById('youTubeSearch').setAttribute("href", YouTubeSearchUrl+FullSongTitle);
}
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
