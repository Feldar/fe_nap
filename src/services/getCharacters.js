export function getCharacters() {

  const apiURL = 'http://nananijiarchiveproject.test/api/characters';

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const characters = data.map(charactersInfo => {
        const { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
          color, join_date, graduation_date, status, artist_id } = 
          charactersInfo.attributes
        return { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
          color, join_date, graduation_date, status, artist_id };
      })

      return characters
    })
}