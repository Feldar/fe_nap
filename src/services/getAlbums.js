export function getAlbums() {

  const apiURL = 'http://nananijiarchiveproject.test/api/albums';

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const albums = data.map(albumsInfo => {
        const { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
          blog, tiktok_account, instagram_account, join_date, graduation_date, status } = 
          albumsInfo.attributes
        return { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
          blog, tiktok_account, instagram_account, join_date, graduation_date, status };
      })

      return albums
    })
}