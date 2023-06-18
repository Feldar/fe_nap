export function getSongs() {

  const apiURL = 'http://nananijiarchiveproject.test/api/songs';

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const songs = data.map(songsInfo => {
        const { id, song_number, name_rm, name_jp, duration, album_id, file, 
          filename } = 
          songsInfo.attributes
        return { id, song_number, name_rm, name_jp, duration, album_id, file, 
          filename };
      })

      return songs
    })
}