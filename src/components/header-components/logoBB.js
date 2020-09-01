import React from 'react';
import logoBB from './../../images/logoBB.svg'
import './../../styles-components/header-components/logoBB.css'



export default () => {

    function backToStart(){
        window.location.reload();

    }

    return <img onClick={backToStart} src={logoBB} alt="logo BB S.p.A." className="logoBB"/>
    
}