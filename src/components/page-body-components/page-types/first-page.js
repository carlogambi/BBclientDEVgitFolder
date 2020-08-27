import React from 'react';
import '../../../styles-components/page-body-components/page-types/first-page.css'
import videoPrimaPagina from './../../../images/video-bb-prima-pagina.mp4'
import trasformiamoIdeeProdotti from './../../../images/trasformiamo_idee_prodotti.svg'

import $ from 'jquery';

// pretty onready video managment
$(document).ready(() => {
    $('#video-prima-pagina').css({opacity: 0});
    $('#video-prima-pagina').on('canplay', () => {
        $('#video-prima-pagina').animate({opacity: 1}, 500);
    })
});
// pretty onready video managment

export default (props) => {
    return <div className="first-page">
        <div id="first-page-video-container">
        <video id="video-prima-pagina" autoPlay loop muted>
            <source src={videoPrimaPagina} />
        </video>
        </div>
        <img id="trasformiamo-idee-prodotti" src={trasformiamoIdeeProdotti} alt="trasformiamo le ideee in prodotti"/>
        {/* <h1>
            <i>trasformiamo<br></br> le </i>
            <strong>
            idee 
            </strong>
            <br></br>
            <i>
                in 
            </i>
            <strong>
                prodotti
            </strong>
        </h1> */}
    </div>
}