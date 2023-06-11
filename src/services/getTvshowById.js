export function getTvshowById(tvshowid) {

  const apiURL = `http://nananijiarchiveproject.test/api/tvshows/${tvshowid}`;

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { id, name_rm, name_jp, name_en, image, start_date, end_date, episodes, status } =
        response.data.attributes
      return { id, name_rm, name_jp, name_en, image, start_date, end_date, episodes, status };
    })
}