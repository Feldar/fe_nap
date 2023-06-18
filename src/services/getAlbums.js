export function getAlbums() {

  const apiURL = 'http://nananijiarchiveproject.test/api/albums';

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const albums = data.map(albumsInfo => {
        const { id, image, name_rm, name_jp, total_songs, release_price, media_format, 
          release_date, duration } = 
          albumsInfo.attributes
        return { id, image, name_rm, name_jp, total_songs, release_price, media_format, 
          release_date, duration };
      })

      return albums
    })
}