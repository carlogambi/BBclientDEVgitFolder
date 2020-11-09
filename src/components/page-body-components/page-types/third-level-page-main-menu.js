import React from 'react';
import './../../../styles-components/page-body-components/page-types/third-level-page-main-menu.css';


export default (props) => {

return <div className="t-l-page"  id={props.id} data-voce-ref={props.page.voce}>
            {props.page.voce?<h1 className="t-l-title" dangerouslySetInnerHTML={{ __html: ''+props.page.voce }}></h1>:null}        
            {props.page.subTitle?<h4 className="t-l-subTitle">{props.page.subTitle}</h4>:null}        
            {props.page.mainContent?<div className="t-l-mainContent"  dangerouslySetInnerHTML={{__html: props.page.mainContent}} />:null}        
            {props.page.footer?<div className="t-l-footer"  dangerouslySetInnerHTML={{__html: props.page.footer}} />:null}        
        </div>
}