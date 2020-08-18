import React from 'react';

import './../../styles-components/page-body-components/main-menu.css'

import VoceMenu from './voce-menu'


export default (props) => {


    function buildMenu(){
      return  props.vociMenu.map((v, i) =><VoceMenu key={i} 
          voce={v}  
          isPagRef = {true}
          />)

    }
    return <div id="main-menu">
        { buildMenu() }
    </div>
}