export function getSongById(songs) {

  const apiURL = `http://nananijiarchiveproject.test/api/songs/${songs}`;
  
  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { id, song_number, name_rm, name_jp, duration, album_id, file, 
        filename } =
        response.data.attributes
      return { id, song_number, name_rm, name_jp, duration, album_id, file, 
        filename };
    })
}