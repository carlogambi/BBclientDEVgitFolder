import React from 'react';

import MenuContainer from './page-body-components/menu-container';
import MainContainer from './page-body-components/main-container';

import './../styles-components/page-body.css'


export default 
    (props) => {
    return <div id="page-body">
        <MenuContainer vociMenu={props.data.vociMenu}/>
        <MainContainer footerData = { props.footerData }/>
    </div>
    }
