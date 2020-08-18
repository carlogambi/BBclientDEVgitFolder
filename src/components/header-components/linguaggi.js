import React from 'react';

import LangButton from './langButton'

import './../../styles-components/header-components/linguaggi.css'


export default (props) => {
    return <div className="langsContainer">
        
        <LangButton lang={props.list[0]} /> | 
        <LangButton lang={props.list[1]} /> 
    </div>
}