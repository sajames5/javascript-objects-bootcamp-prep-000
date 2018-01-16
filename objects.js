var playlist = {michaelJackson: "thriller"}
function updatePlaylist(playlist, artistName, songTitle) {playlist[artistName] = songTitle
return playlist
}
function removeFromPlylist(playlist, artistName)
{delete playlist.artistName
  return playlist
}