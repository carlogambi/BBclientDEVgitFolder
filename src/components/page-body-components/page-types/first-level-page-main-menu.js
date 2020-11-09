import React from 'react'
import './../../../styles-components/page-body-components/page-types/first-level-page-main-menu.css';
export default (props) => {


    // function title(){
    //     if(props.page.voce){ 
    //         return <h1 className="f-l-title">{props.page.voce}</h1>
    //     }
    // }
    // function subTitle(){
    //     if(props.page.subTitle){ 
    //         return <h4 className="f-l-subTitle" dangerouslySetInnerHTML={{__html: props.page.subTitle}}></h4>
    //     }
    // }

    // function mainContent(){
    //     if(props.page.mainContent){ 
    //         return <div className="f-l-mainContent"  dangerouslySetInnerHTML={{__html: props.page.mainContent}} />;
    //     }
    // }
    // function footer(){
    //     if(props.page.footer){ 
    //         return <p className="f-l-footer" >{props.page.footer}</p>
    //     }
    // }

    // return <div className="f-l-page"  id={props.id} data-voce-ref={props.page.voce}>
    //     {title()}
    //     {subTitle()}
    //     {mainContent()}
    //     {footer()}
    // </div>
    
    return <div className="f-l-page"  id={props.id} data-voce-ref={props.page.voce}>
        {props.page.voce?<h1 className="f-l-title">{props.page.voce}</h1>:null}        
        {props.page.subTitle?<h4 className="f-l-subTitle" dangerouslySetInnerHTML={{__html: props.page.subTitle}}></h4>:null}        
        {props.page.mainContent?<div className="f-l-mainContent"  dangerouslySetInnerHTML={{__html: props.page.mainContent}} />:null}        
        {props.page.footer?<p className="f-l-footer" >{props.page.footer}</p>:null}        
    </div>
}