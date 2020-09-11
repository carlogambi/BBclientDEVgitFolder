import visiblePageSectionEvent from '../../custom-events/visiblePageSectionEvent'

import scrollAnimationEndIndicator from './scroll-animation-end-indicator';

let currentVisible; //string: html node id 

let currentVisibleTitle; //html node


export default (targetId, containerId) => {
          document.querySelector('#'+containerId).addEventListener('scroll', () => {
            let current = document.getElementById(targetId)
            if(current){
              let isVisible = visibleY(current);
              if(isVisible){console.log(document.getElementById(targetId).childNodes[0].textContent);}
                if(isVisible && (currentVisible !== targetId)){ 
                  currentVisible = targetId;
                  currentVisibleTitle = document.getElementById(targetId).childNodes[0].textContent;
                    if(scrollAnimationEndIndicator.isAnimationEnded()){
                      visiblePageSectionEvent.trigger(currentVisibleTitle, {currentVisible})
                    }
                }
            }
          });

}



function visibleY(el) { //input param -el-: html node
  //initialization
  let rect = el.getBoundingClientRect(); // object (with node's position & dimensions): 
  //{ height: int, width: int, top: int, bottom: int, left: int, right: int, x: int, y: int }
  let top = rect.top;
  el = el.parentNode; // html node: element id -> #main-container
  
  do {
    rect = el.getBoundingClientRect(); //update position
    if (top <= rect.bottom ) {
       if(rect.bottom === false){
         return false;
        }
      }

    // Check if the element is out of view due to a container scrolling
    if (top  >= rect.top){ return false}
    el = el.parentNode;
  } while (el !== document.body);
  
  // Check its within the document viewport
  return top <= document.documentElement.clientHeight;
};

