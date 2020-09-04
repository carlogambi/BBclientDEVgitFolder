import React from 'react'
import $ from 'jquery'
import MenuContainer from './../page-body-components/menu-container'
import './../../styles-components/mobile-components/mobile-menu-container.css'
import FooterMenu from '../footer-components/footer-menu'

export default (props) => {
    if(props.visibility){
        $('#mobile-menu-container').animate({
            top: '20%',
        }, 500);
    }else{
            $('#mobile-menu-container').animate({
                top: '100%'
            }, 500);
    }
    return <div 
            id='mobile-menu-container'
            >   
                <MenuContainer vociMenu={props.menuInfo}/>
                <FooterMenu vociFooter={props.footerData.vociFooter} />
                <p dangerouslySetInnerHTML={{ __html: props.footerData.footerInfo }} id="footer-info-mobile">
                </p>
            </div>

}