import React from 'react'
import Gallery from './../page-components/gallery'
import './../../../styles-components/page-body-components/page-types/first-level-page-main-menu.css';
export default (props) => {


    function title(){
        if(props.page.voce){ 
            return <h1 className="f-l-title">{props.page.voce}</h1>
        }
    }
    function subTitle(){
        if(props.page.subTitle){ 
            return <h4 className="f-l-subTitle" dangerouslySetInnerHTML={{__html: props.page.subTitle}}></h4>
        }
    }
    function gallery(){
        if(props.page.images && props.page.images.length > 0){ 
            return <Gallery images = {props.page.images} />
        }
    }
    function mainContent(){
        if(props.page.mainContent){ 
            return <div className="f-l-mainContent"  dangerouslySetInnerHTML={{__html: props.page.mainContent}} />;
        }
    }
    function footer(){
        if(props.page.footer){ 
            return <p className="f-l-footer" >{props.page.footer}</p>
        }
    }

    return <div className="f-l-page"  id={props.id} data-voce-ref={props.page.voce}>
        {title()}
        {subTitle()}
        {gallery()}
        {mainContent()}
        {footer()}
    </div>
}