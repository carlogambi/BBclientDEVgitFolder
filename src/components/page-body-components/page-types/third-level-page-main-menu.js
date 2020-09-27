import React from 'react';
import './../../../styles-components/page-body-components/page-types/third-level-page-main-menu.css';


export default (props) => {

    function title(){
        if(props.page.voce){ 
            return <h1 className="t-l-title" dangerouslySetInnerHTML={{ __html: ''+props.page.voce }}></h1>
        }
    }
    function subTitle(){
        if(props.page.subTitle){ 
            return <h4 className="t-l-subTitle">{props.page.subTitle}</h4>
        }
    }

    function mainContent(){
        if(props.page.mainContent){ 
            return <div className="t-l-mainContent"  dangerouslySetInnerHTML={{__html: props.page.mainContent}} />;
        }
    }
    function footer(){
        if(props.page.footer){ 
            return <div className="t-l-footer"  dangerouslySetInnerHTML={{__html: props.page.footer}} />;
        }
    }
    return <div className="t-l-page"  id={props.id} data-voce-ref={props.page.voce}>
        {title()}
        {subTitle()}

        {mainContent()}
        {footer()}
    </div>
}