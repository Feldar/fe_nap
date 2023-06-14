export function getEpisodeById(episode) {

  const apiURL = `http://nananijiarchiveproject.test/api/episodes/${episode}`;

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
      const { id, episode_number, name_rm, name_jp, name_en, format, resolution, 
        release_date, type, duration, file, filename, image, imagename, tvshows_id } =
        response.data.attributes
      return { id, episode_number, name_rm, name_jp, name_en, format, resolution, 
        release_date, type, duration, file, filename, image, imagename, tvshows_id };
    })
}