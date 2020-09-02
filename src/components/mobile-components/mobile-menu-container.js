import React from 'react'
import $ from 'jquery'
import MenuContainer from './../page-body-components/menu-container'
import './../../styles-components/mobile-components/mobile-menu-container.css'
import FooterMenu from '../footer-components/footer-menu'

export default (props) => {
    console.log(props)
    return <div 
            id='mobile-menu-container'
            >
                <MenuContainer vociMenu={props.menuInfo}/>
                <FooterMenu vociFooter={props.footerData.vociFooter} />
                <br/>
                <p dangerouslySetInnerHTML={{ __html: props.footerData.footerInfo }}>
                </p>
            </div>

}