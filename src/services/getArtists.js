export function getArtists() {

  const apiURL = 'http://nananijiarchiveproject.test/api/artists';

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const artists = data.map(artistsInfo => {
        const { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
          blog, tiktok_account, instagram_account, join_date, graduation_date, status } = 
          artistsInfo.attributes
        return { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
          blog, tiktok_account, instagram_account, join_date, graduation_date, status };
      })

      return artists
    })
}