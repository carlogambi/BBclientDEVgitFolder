import React from 'react';

import Header from './components/header';
import PageBody from './components/page-body';
import Footer from './components/footer';
import langmanager from './langs/langManager';

import $ from 'jquery';

import changeLangEvent from './custom-events/changeLangEvent'

$(document).ready(() => {
  $('.app').animate({opacity: '1.0'}, 1000);
});
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentLang: langmanager.getDefaultLang(),
      langPack: langmanager.getLangPack(langmanager.getDefaultLang()),
      othersLangsList: langmanager.getlangListWithoutCurrent()
    }
  }

  updateLangContext(){
    let currentLang = langmanager.getCurrentLang();
    let currentLangPack = langmanager.getLangPack(currentLang);
    let othersLangsList = langmanager.getlangListWithoutCurrent()
    this.setState({
      currentLang: currentLang,
      langPack: currentLangPack,
      othersLangsList: othersLangsList
    });
  }


  componentDidMount(){
    changeLangEvent.intereceptChangeLangEvent(() => {
      this.updateLangContext();
    });

  }

  render(){
    return (
     <div className="app">
       <Header langData = {
         {
           areaR: this.state.langPack.areaRes, 
           othersL: this.state.othersLangsList
           }
        } />
       <PageBody data ={
         {
           vociMenu: this.state.langPack.vociMenu,
         }
       } 
          footerData = {
        { 
          footerInfo: this.state.langPack.footerInfo, 
          vociFooter: this.state.langPack.vociFooter
        }
       }
       />
       <Footer
        isFirstPage={true}
        data= {
          { 
            footerInfo: this.state.langPack.footerInfo, 
            vociFooter: this.state.langPack.vociFooter
          }
        } />
      </div>
    );
  }
}
