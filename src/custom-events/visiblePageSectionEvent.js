let a = document.querySelector('#custom-event-dispatcher');

let currentVisible = '';

const visiblePageSectionEvent = {
    trigger: (sectionName, payload) => {
        if(currentVisible !== sectionName){
            currentVisible = sectionName;
        a.dispatchEvent(
            new CustomEvent('visible-section-changed', {detail: sectionName, payload})
        )
        }
    },
    intercept: (callback) => {
        a.addEventListener('visible-section-changed', (event) => {
            callback(event)
        })
    }
}



export default visiblePageSectionEvent