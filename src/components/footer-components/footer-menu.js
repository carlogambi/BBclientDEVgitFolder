import React from 'react';

import VoceFooterMenu from './voce-footer-menu'

import './../../styles-components/footer-components/footer-menu.css'

import $ from 'jquery'

export default (props) => {
    const digested = props.vociFooter.map(
        (v, i, a) => {
            if(i < a.length -1){
                return <React.Fragment key={'frag'+i} ><VoceFooterMenu key={'separator'+i} voce={v.voce} /><label>|</label></React.Fragment>
            }else{
                return <VoceFooterMenu key={i} voce={v.voce} />}
            }
    );

    return <div className="footer-menu">
    {digested}
    </div>
}