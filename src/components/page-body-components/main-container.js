import React, {useState} from 'react';

import './../../styles-components/page-body-components/main-container.css'

import changepageEvent from './../../custom-events/changePageEvent'
import pageManager from './../util/page-manager';
import changeLangEvent from './../../custom-events/changeLangEvent';
import langmanager from '../../langs/langManager';

import PageGroup from './page-types/page-group'
import changePageSectionEvent from '../../custom-events/changePageSectionEvent';

import scrollAnimationEndIndicator from './../util/scroll-animation-end-indicator';
import historyManager from './../util/history-management';

import $ from 'jquery'

export default (props) => {
    const [page, setPage] = useState(pageManager.getCurrentPage());
    let [pageOrigin, setpageorigin] = useState('first-page');
    let footerData = props.footerData;

    if(pageOrigin === 'voce-footer-menu'){
        $('#main-container').animate({
            scrollTop: 0
        }, 500);
    }
    
    historyManager.interceptChangeState((event) => {
        if(event.state.payload){
            // console.log(event.state)
            if(langmanager.getCurrentLang() !== event.state.lang){
                changeLangEvent.triggerChangeLangEvent(event.state.lang)
            }
            if((pageManager.getCurrentPage().voce !== event.state.currentPage) && event.state.payload.isPageRef){
                changepageEvent.triggerChangePageEvent(event.state.currentPage)
            }
        }
    });

    changepageEvent.intereceptChangePageEvent((e) => {
        if(e.detail.origin){
            setpageorigin(e.detail.origin);
            setPage(pageManager.getCurrentPage());
        }else{
            setPage(pageManager.getCurrentPage());
        }
    });    
    
    
    changeLangEvent.intereceptChangeLangEvent(() => {
        setPage(pageManager.getCurrentPage());
    });

    
    changePageSectionEvent.intercept((e) => { 
        let currentFocusedSection;
        document
            .querySelector('.main-container')
            .childNodes
            .forEach(node => {
                if(node.getAttribute('data-voce-ref') === e.detail){
                    currentFocusedSection = node;
                }
            });
            if(currentFocusedSection){
                scrollAnimationEndIndicator.setAnimationEnd(false);
                currentFocusedSection.childNodes[0].scrollIntoView({ behavior: 'smooth', block: 'start'});
                callWhenScrollCompleted('main-container', () => {
                    scrollAnimationEndIndicator.setAnimationEnd(true);
                });
                
            }else{
                scrollAnimationEndIndicator.setAnimationEnd(false);
                document.getElementsByClassName('main-container')[0].scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                callWhenScrollCompleted('main-container', () => {
                    scrollAnimationEndIndicator.setAnimationEnd(true);
                });
            }
    });
        

        return <div className='main-container' id='main-container'  >
        <PageGroup 
        page = {page} 
        origin = {pageOrigin}
        footerData = { footerData }
        />
        </div>
}

// export default class MainContainer extends React.Component{
//     constructor(props){
        // super(props);
        // this.state = {
        //     currentLang: langmanager.getCurrentLang(),
        //     page: pageManager.getCurrentPage(),
        //     pageOrigin: 'first-page',
        //     footerData: props.footerData
        // }

        // historyManager.interceptChangeState((event) => {
        //     if(event.state.payload){
        //         // console.log(event.state)
        //         if(langmanager.getCurrentLang() !== event.state.lang){
        //             changeLangEvent.triggerChangeLangEvent(event.state.lang)
        //         }
        //         if((pageManager.getCurrentPage().voce !== event.state.currentPage) && event.state.payload.isPageRef){
        //             changepageEvent.triggerChangePageEvent(event.state.currentPage)
        //         }
        //     }
        // })
    // }

    // componentWillReceiveProps(props){
        // this.setState({
        //     footerData: props.footerData
        // })
    // }

    // componentDidUpdate(){
        // if(this.state.pageOrigin === 'voce-footer-menu'){
        //     $('#main-container').animate({
        //         scrollTop: 0
        //     }, 500);
        // }
    // }
    
    // componentDidMount(){
        // changepageEvent.intereceptChangePageEvent((e) => {
        //     if(e.detail.origin){
        //         this.setState({
        //             page: pageManager.getCurrentPage(),
        //             pageOrigin: e.detail.origin
        //         });
        //     }else{
        //         this.setState({
        //             page: pageManager.getCurrentPage(),
        //         });
        //     }
        // });    

        // changeLangEvent.intereceptChangeLangEvent(() => {
        //     this.setState(()=>({
        //         currentLang: langmanager.getCurrentLang(),
        //         page: pageManager.getCurrentPage(),
        //     }));
        // });
        
        // changePageSectionEvent.intercept((e) => { 
        //     let currentFocusedSection;
        //     document
        //         .querySelector('.main-container')
        //         .childNodes
        //         .forEach(node => {
        //             if(node.getAttribute('data-voce-ref') === e.detail){
        //                 currentFocusedSection = node;
        //             }
        //         });
        //         if(currentFocusedSection){
        //             scrollAnimationEndIndicator.setAnimationEnd(false);
        //             currentFocusedSection.childNodes[0].scrollIntoView({ behavior: 'smooth', block: 'start'});
        //             callWhenScrollCompleted('main-container', () => {
        //                 scrollAnimationEndIndicator.setAnimationEnd(true);
        //             });
                    
        //         }else{
        //             scrollAnimationEndIndicator.setAnimationEnd(false);
        //             document.getElementsByClassName('main-container')[0].scrollTo({
        //                 top: 0,
        //                 left: 0,
        //                 behavior: 'smooth'
        //             });
        //             callWhenScrollCompleted('main-container', () => {
        //                 scrollAnimationEndIndicator.setAnimationEnd(true);
        //             });
        //         }
        // });

    // }

    
    
    // render(){
        //     return <div className='main-container' id='main-container'  >
        //         <PageGroup 
        //         page = {this.state.page} 
        //         origin = {this.state.pageOrigin}
        //         footerData = { this.state.footerData }
        //         />
        // </div>
//     }
// }

function callWhenScrollCompleted(parentElementId, callback) {
    let checkTimeout = 200;
    const scrollTimeoutFunction = () => {
      // Scrolling is complete
      $('#'+parentElementId).off("scroll");
      callback();
    };
    let scrollTimeout = setTimeout(scrollTimeoutFunction, checkTimeout);
  
    $('#'+parentElementId).on("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(scrollTimeoutFunction, checkTimeout);
    });
  }