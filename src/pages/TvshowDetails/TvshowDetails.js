import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import TvshowView from 'components/TvshowView/TvshowView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useTvshow from 'hooks/useTvshow';
import Contacto from 'components/Landing/Contacto/contacto';
import Footer from 'components/Landing/Footer/footer';
import Header from 'components/Landing/Header/header';
import Episodes from 'components/Episodes/Episodes';

const TvshowDetails = () => {
  const { id } = useParams();
  const { searching, tvshow } = useTvshow(id);

  return (
    <div>
      <Header />
      {searching
        ? <AjaxLoader loader={imageLoader}></AjaxLoader>
        : <TvshowView
          key={tvshow.id}
          name_rm={tvshow.name_rm}
          name_jp={tvshow.name_jp}
          name_en={tvshow.name_en}
          file={tvshow.file}
          filename={tvshow.filename}
          image={tvshow.image}
          imagename={tvshow.imagename}
          start_date={tvshow.start_date}
          end_date={tvshow.end_date}
          episodes={tvshow.episodes}
          status={tvshow.status}
        >
        </TvshowView>}
        <Episodes tvshow_id={id} tvshow_image={tvshow.image} />
      <Contacto />
      <Footer />
    </div>
  )
}

export default TvshowDetails;