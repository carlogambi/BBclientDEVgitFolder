import React from 'react';


import './../../styles-components/header-components/lang-button.css'
import changeLangEvent from './../../custom-events/changeLangEvent'


export default (props) =>{

  function changeLang(){
    changeLangEvent.triggerChangeLangEvent(props.lang);
  }

  return <span className="langButton" onClick={changeLang}>
      {props.lang}
    </span>
}
