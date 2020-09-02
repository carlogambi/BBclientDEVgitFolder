import React from 'react';

import MenuContainer from './page-body-components/menu-container';
import MainContainer from './page-body-components/main-container';

import './../styles-components/page-body.css'
import detectDevice from './util/detect-device'

export default 
    (props) => {
        function insertMenu() { 
            if(detectDevice() === 'desktop'){ 
              return  <MenuContainer vociMenu={props.data.vociMenu}/>
         } 
        }
        
    return <div id="page-body">
        {insertMenu()}
        <MainContainer footerData = { props.footerData }/>
    </div>
    }
