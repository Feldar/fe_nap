export function getEpisodes() {

  const apiURL = 'http://nananijiarchiveproject.test/api/episodes';

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { data } = response
      const episodes = data.map(episodesInfo => {
        const { id, episode_number, name_rm, name_jp, name_en, format, resolution, 
          release_date, type, duration, file, filename, image, imagename, tvshows_id } = 
        episodesInfo.attributes
        return { id, episode_number, name_rm, name_jp, name_en, format, resolution,
          release_date, type, duration, file, filename, image, imagename, tvshows_id };
      })

      return episodes
    })
}