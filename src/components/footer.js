import React from 'react';

import FooterMenu from './footer-components/footer-menu'
import FooterInfo from './footer-components/footer-info'
import $ from 'jquery';
import './../styles-components/footer-components/footer.css'
// import Certificazione from './page-body-components/certificazione'
import pageManager from './util/page-manager'
import changePageEvent from './../custom-events/changePageEvent'

let maxHeight, minHeight;
let footerinfoHeight, footerHeight;
let isFooterExpanded = false, reachedEndPage = false, enableEffect = true;

function initializeFooterVars(){
    if(!footerinfoHeight){
        footerinfoHeight = $('#footer-info').innerHeight();
    }
    if(!footerHeight){
        footerHeight = $('.footer').innerHeight();
    }
    if(!maxHeight || !minHeight){
        maxHeight = footerHeight + footerinfoHeight;
        minHeight =  footerHeight ;
    }
}

function reduceFooter(){
    initializeFooterVars();
    if(enableEffect){
        if(isFooterExpanded && !reachedEndPage){
            $('#footer-info').slideUp('fast') 
            $('.footer')
            .animate({height: minHeight + 'px'},
             300, 
             () => { 
                 isFooterExpanded = false;
            });   
        }
    }
    
}

function expandFooter(){
    initializeFooterVars();
    if(enableEffect){
    if(!isFooterExpanded){
            $('#footer-info').slideDown('fast');
            $('.footer')
            .animate({height: maxHeight + 'px'},
             300,
              () => { 
                  isFooterExpanded = true
            }); 
        }
    }
}

$( document ).ready(() => {
    if(pageManager.getCurrentPage().isFirstPage){
        expandFooter();
        enableEffect = false;
    }
    changePageEvent.intereceptChangePageEvent(() => {
            enableEffect = true;
            reduceFooter();
    })
    // {
    //     enableEffect = true;
    //     let oneTime = true;
    //     if(oneTime){
    //         reduceFooter();
    //         oneTime = false
    //     }
    // }
    
    const mainContainer = document.getElementById('main-container');
    mainContainer.addEventListener("scroll", (event) => {
        let currentHeight = mainContainer.scrollTop + mainContainer.clientHeight;
        const totalHeight = mainContainer.scrollHeight;
        
        if(currentHeight >= (totalHeight-4)){
            reachedEndPage = true;
            expandFooter();
        }else{
            reachedEndPage = false;
            if(isFooterExpanded){
                reduceFooter();
            }        
        }

    });
});

export default (props) => {
    let id = 'footer';
    if(props.isFirstPage){ id += '-first-page' }
    return <div 
            id={id} className="footer" 
            onMouseEnter={expandFooter} 
            onMouseLeave={reduceFooter}>
                {/* <Certificazione /> */}
        <div className="footer-data-container">
        <FooterMenu vociFooter = {props.data.vociFooter}/>
        <FooterInfo info= {props.data.footerInfo}/>
        </div>
    </div>

}

