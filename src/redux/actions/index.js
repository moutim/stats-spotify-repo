function sendArrayTopMusics(time, musics) {
    const action= { type: `SEND_MUSICS_${time}`,
      musics,
    };
    return action
}
  
function sendArrayTopArtists(time, artists) {
const action= { type: `SEND_ARTISTS_${time}`,
    artists };
return action
}
  
module.exports = { sendArrayTopMusics, sendArrayTopArtists };
  