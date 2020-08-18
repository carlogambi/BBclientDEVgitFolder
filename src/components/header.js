import React from 'react';

import AreaRiservata from './header-components/area-riservata'
import Linguaggi from './header-components/linguaggi'
import LogoBB from './header-components/logoBB'

import './../styles-components/header.css'

export default (props) => {
    return <div className='header'>
        <LogoBB />
        <div className='AreaResLangs'>
        <Linguaggi list = {props.langData.othersL}/>
        <AreaRiservata text = {props.langData.areaR}/>
        </div>
    </div>
}