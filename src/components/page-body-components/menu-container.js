import React from 'react'

import './../../styles-components/page-body-components/menu-container.css'

import menuIcon from './../../images/menu-icon.svg'

import Menu from './menu'
// import GLOBALS from './../util/globals'
// import CSSbreackpoints from './../../css-breackpoint-reference.json'
import detectDevice from './../util/detect-device'
// import Certificazione from './certificazione'

export default (props) => {
    if(detectDevice() === 'desktop'){
    return <div id="menu-container">
            <Menu vociMenu={props.vociMenu}/>
            {/* <Certificazione /> */}
        </div>
    }
    if(detectDevice() === 'mobile'){
    return <div id="menu-container">
            <img id="menu-icon-mobile" src={menuIcon} alt="menu icon"/>
            <Menu vociMenu={props.vociMenu}/>
            {/* <Certificazione /> */}
        </div>
    }
}


