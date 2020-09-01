import React from 'react';


import './../../styles-components/header-components/lang-button.css'
import changeLangEvent from './../../custom-events/changeLangEvent'
import historyManager from './../util/history-management'


export default (props) =>{

  function changeLang(){
    changeLangEvent.triggerChangeLangEvent(props.lang);
    const historyState = window.history.state;
    historyState.lang = props.lang;
    historyManager.newState(historyState);    
  }

  return <span className="langButton" onClick={changeLang}>
      {props.lang}
    </span>
}
