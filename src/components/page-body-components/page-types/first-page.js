import React from 'react';
import '../../../styles-components/page-body-components/page-types/first-page.css'
import videoPrimaPagina from './../../../images/video-bb-prima-pagina.mp4'
import trasformiamoIdeeProdotti from './../../../images/trasformiamo_idee_prodotti.svg'

export default (props) => {
    return <div className="first-page">
        <video id="video-prima-pagina" autoPlay loop muted>
            <source src={videoPrimaPagina} />
        </video>
        <img id="trasformiamo-idee-prodotti" src={trasformiamoIdeeProdotti} alt="trasformiamo le ideee in prodotti"/>
    </div>
}