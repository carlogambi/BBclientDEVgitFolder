import React from 'react';
import logoBB from './../../images/logoBB.svg'
import './../../styles-components/header-components/logoBB.css'



export default () => {

    function backToStart(){
        window.location.reload();

    }

    return <div id="logo-bb-container" onClick={backToStart}>
        <img src={logoBB} alt="logo BB.spa" className="logoBB"/>
    </div>
}