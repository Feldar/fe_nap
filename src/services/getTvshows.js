export function getTvshows() {

  const apiURL = 'http://nananijiarchiveproject.test/api/tvshows';

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const tvshows = data.map(tvshowInfo => {
        const { id, name_rm, name_jp, name_en, file, filename, 
          image, imagename, start_date, end_date, episodes, status } = 
        tvshowInfo.attributes
        return { id, name_rm, name_jp, name_en, file, filename, 
          image, imagename, start_date, end_date, episodes, status };
      })

      return tvshows
    })
}