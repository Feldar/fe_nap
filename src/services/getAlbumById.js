export function getAlbumById(albums) {

  const apiURL = `http://nananijiarchiveproject.test/api/albums/${albums}`;
  
  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { id, image, name_rm, name_jp, total_songs, release_price, media_format, 
        release_date, duration } =
        response.data.attributes
      return { id, image, name_rm, name_jp, total_songs, release_price, media_format, 
        release_date, duration };
    })
}