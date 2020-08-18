import React from 'react';

import './../../styles-components/footer-components/voce-footer-menu.css';

import changepageEvent from './../../custom-events/changePageEvent'
import $ from 'jquery';

export default (props) => {
    function whenClicked(){ 
    $('.voce-menu-container').slideUp();
    changepageEvent.triggerChangePageEvent(props.voce, 'voce-footer-menu')
 }
    return <span className="voce-footer-menu" onClick={whenClicked}>
        {props.voce}
    </span>;
} 