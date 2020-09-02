import React from 'react'

import './../../styles-components/page-body-components/menu-container.css'

// import menuIcon from './../../images/menu-icon.svg'

import Menu from './menu'
// import GLOBALS from './../util/globals'
// import CSSbreackpoints from './../../css-breackpoint-reference.json'
// import Certificazione from './certificazione'


export default (props) => {
    
    return <div id="menu-container">
            <Menu vociMenu={props.vociMenu}/>
            {/* <Certificazione /> */}
        </div>
    
}


