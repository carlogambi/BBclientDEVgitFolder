import React from 'react';
import '../../../styles-components/page-body-components/page-types/first-page.css'
import videoPrimaPagina from './../../../images/video-bb-prima-pagina.mp4'

export default (props) => {
    return <div className="first-page">
        <h1><i><span class="fondoOp" > &nbsp;trasformiamo&nbsp;</span></i><br></br> <span class="fondoOp" > <i>&nbsp;le </i><span class="someBold">idee&nbsp;</span></span> <br></br><span class="fondoOp" > <i>&nbsp;in </i><span class="someBold">prodotti&nbsp;</span></span></h1>
        <video id="video-prima-pagina" autoPlay loop muted>
            <source src={videoPrimaPagina} />
        </video>
    </div>
}