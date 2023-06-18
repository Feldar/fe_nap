export function getCharacterById(character) {

  const apiURL = `http://nananijiarchiveproject.test/api/characters/${character}`;
  
  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
        color, join_date, graduation_date, status, artist_id } =
        response.data.attributes
      return { id, image, name_rm, name_jp, profile_page, twitter_account, youtube_account, 
        color, join_date, graduation_date, status, artist_id };
    })
}