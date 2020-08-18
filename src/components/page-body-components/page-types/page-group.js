import React from 'react';

import FooterMenuDerivedPage from './footer-menu-derived-page'
import FirstPage from './first-page'
import MainMenuPageAccumulator from './main-menu-page-accumulator'

import $ from 'jquery'




export default (props) => {

    switch (props.origin) {
        case "first-page":
            $('.main-container').css('overflow-y', 'hidden');
            return  <FirstPage page={props.page}/>
            case "voce-footer-menu":
                $('.main-container').css('overflow-y', 'scroll');
                return <React.Fragment>
                        <FooterMenuDerivedPage page = {props.page}/>
                        {/* <Footer data={props.footerData} /> */}
                    </React.Fragment>
        case "voce-menu":
            $('.main-container').css('overflow-y', 'scroll');
            return <React.Fragment>
                        <MainMenuPageAccumulator page = {props.page} />
                        {/* <Footer data={props.footerData} /> */}
                    </React.Fragment>
            
        default:
        return 'missing page origin\n current origin: ' + props.origin
    }
}