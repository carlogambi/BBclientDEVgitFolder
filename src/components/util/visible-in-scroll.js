import visiblePageSectionEvent from '../../custom-events/visiblePageSectionEvent'

import scrollAnimationEndIndicator from './scroll-animation-end-indicator';

let currentVisible; //string: html node id 

let currentVisibleTitle; //html node

export default (targetId, containerId) => {

    const visibleY = (el) => { //input param -el-: html node
        //initialization
        let rect = el.getBoundingClientRect(); // object (with position & dimensions): { height: int, width: int, top: int, bottom: int, left: int, right: int, x: int, y: int }
        let top = rect.top, height = rect.height; 
        el = el.parentNode; // html node: element id -> #main-container
        
        do {
          rect = el.getBoundingClientRect();
          if (top <= rect.bottom ) {
             if(rect.bottom === false){
               return false;
              }
            }
          // Check if the element is out of view due to a container scrolling
          if ((top + height) <= rect.top) return false
          el = el.parentNode;
        } while (el !== document.body);
        // Check its within the document viewport
        return top <= document.documentElement.clientHeight;
      };
      
      // Stuff only for the demo
      function attachEvent(element, event, callbackFunction) {
          if (element.addEventListener) {
              element.addEventListener(event, callbackFunction, false);
          } else if (element.attachEvent) {
              element.attachEvent('on' + event, callbackFunction);
          }
      };
      
      const update = () => {
          let current = document.getElementById(targetId)
          if(current){
            let isVisible = visibleY(current);
              if(isVisible && (currentVisible !== targetId)){ 
                  currentVisible = targetId;
                  currentVisibleTitle = document.getElementById(targetId).childNodes[0].textContent;
                  if(scrollAnimationEndIndicator.isAnimationEnded()){
                    visiblePageSectionEvent.trigger(currentVisibleTitle, {currentVisible})
                  }
              }
          }
        };
        
          attachEvent(document.getElementById(containerId), "scroll", update);
          attachEvent(window, "resize", update);
          update();
         

}