import React from 'react';
import '../../../styles-components/page-body-components/page-types/first-page.css'
import videoPrimaPagina from './../../../images/video-bb-prima-pagina.mp4'

export default (props) => {
    return <div className="first-page">
        <h1><i>trasformiamo<br></br> le </i>idee <br></br><i>in </i>prodotti</h1>
        <video id="video-prima-pagina" autoPlay loop muted>
            <source src={videoPrimaPagina} />
        </video>
    </div>
}