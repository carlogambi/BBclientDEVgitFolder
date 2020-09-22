import visiblePageSectionEvent from '../../custom-events/visiblePageSectionEvent'

import $ from 'jquery'
export default (targetId, containerId) => {
  const container= document.querySelector('#'+containerId);
  const containerRect = document.getElementById(containerId).getBoundingClientRect()
  const containerheight = containerRect.height;
  function scrollManager(){

    const headerheight = $('.header').css('height').replace('px', '')    
    const elementTag = document.getElementById(targetId).firstChild
    const element = document.getElementById(targetId).firstChild.getBoundingClientRect()
    const topel = element.top ;
    let isVisible = (topel -10 > headerheight) && (topel < containerheight/3) ;

    if( isVisible){
      visiblePageSectionEvent.trigger(elementTag.textContent, {targetId})
    }
    
  };
  
  container.removeEventListener('scroll', scrollManager, false);
  container.addEventListener('scroll', scrollManager, false);
}