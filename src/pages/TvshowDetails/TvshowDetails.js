import React from 'react';
import { useParams } from 'react-router-dom';
import imageLoader from 'images/22-7_Logo.png';
import TvshowView from 'components/TvshowView/TvshowView';
import AjaxLoader from 'components/AjaxLoader/AjaxLoader';
import useTvshow from 'hooks/useTvshow';
import Header from 'components/Landing/Header/header';
import Footer from 'components/Landing/Footer/footer';

const TvshowDetails = () => {
    const { id } = useParams();
    const {searching, tvshow} = useTvshow(id);

    return (
        <div>
            {searching 
                ? <AjaxLoader loader={imageLoader}></AjaxLoader> 
                : <TvshowView  
                    key     ={tvshow.id} 
                    name    ={tvshow.name}
                    image    ={tvshow.image}
                    status    ={tvshow.status}
                    origen    ={tvshow.origen}
                    episodes    ={tvshow.episodes}
                    localizacion    ={tvshow.localizacion}
                    gender          ={tvshow.gender}
                    >                    
                </TvshowView>}
            <Footer />
        </div>
    )
}

export default TvshowDetails;