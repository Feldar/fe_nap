export function getArtistById(artists) {

  const apiURL = `http://nananijiarchiveproject.test/api/artists/${artists}`;
  
  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
        blog, tiktok_account, instagram_account, join_date, graduation_date, status } =
        response.data.attributes
      return { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
          blog, tiktok_account, instagram_account, join_date, graduation_date, status };
    })
}