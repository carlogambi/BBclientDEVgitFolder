import visiblePageSectionEvent from '../../custom-events/visiblePageSectionEvent'

import $ from 'jquery'
export default (targetId, containerId) => {
  const container= document.querySelector('#'+containerId);
  const containerRect = document.getElementById(containerId).getBoundingClientRect()
  const containerheight = containerRect.height;
  function scrollManager(){
  
    const headerheight = $('.header').css('height').replace('px', '');
    const page = document.getElementById(targetId);
    if(page){   
    const elementTag = page.firstChild
    const element = document.getElementById(targetId).getBoundingClientRect()
    // console.log(elementTag)
    // console.log(targetId)
    const topel = element.top ;
    let isVisible = (topel -10 > headerheight) && (topel < containerheight/3) ;

    if( isVisible){
      visiblePageSectionEvent.trigger(elementTag.textContent, {targetId})
    }
    }
  };
  
  container.removeEventListener('scroll', scrollManager, false);
  container.addEventListener('scroll', scrollManager, false);
}