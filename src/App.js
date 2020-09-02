import React from 'react';

import langmanager from './langs/langManager';
import changeLangEvent from './custom-events/changeLangEvent'
import detectDevice from './components/util/detect-device';

import Header from './components/header';
import PageBody from './components/page-body';
import Footer from './components/footer';
import MobileMenu from './components/mobile-menu'

import $ from 'jquery';


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

  insertFooterIfDesktop(){
    if(detectDevice() === 'desktop'){
      return        <Footer
      isFirstPage={true}
      data= {
        { 
          footerInfo: this.state.langPack.footerInfo, 
          vociFooter: this.state.langPack.vociFooter
        }
      } />
    }
  }

  insertMenuIfMobile(){
    if(detectDevice() === 'mobile'){
      return  <MobileMenu 
      vociMenu={this.state.langPack.vociMenu}
      footerData= {
        { 
          footerInfo: this.state.langPack.footerInfo, 
          vociFooter: this.state.langPack.vociFooter
        }
      }
      />
    }
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
        {this.insertFooterIfDesktop()}
        {this.insertMenuIfMobile()}
      </div>
    );
  }
}
