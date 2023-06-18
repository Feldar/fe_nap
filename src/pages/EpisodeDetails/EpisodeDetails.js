import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import EpisodeView from 'components/EpisodeView/EpisodeView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useEpisode from 'hooks/useEpisode';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';

const EpisodeDetails = (props) => {
  const { id } = useParams();
  const { searching, episode } = useEpisode(id);
    
  return (
    <div>
      <Header />
      {searching
        ? <AjaxLoader loader={imageLoader}></AjaxLoader>
        : <EpisodeView
          key={episode.id}
          episode_number={episode.episode_number}
          name_rm={episode.name_rm}
          name_jp={episode.name_jp}
          name_en={episode.name_en}
          format={episode.format}
          resolution={episode.resolution}
          release_date={episode.release_date}
          type={episode.type}
          duration={episode.duration}
          file={episode.file}
          filename={episode.filename}
          image={episode.image}
          imagename={episode.imagename}
          tvshow_id={episode.tvshow_id}>
        </EpisodeView>}
      <Footer />
    </div>
  )
}

export default EpisodeDetails;