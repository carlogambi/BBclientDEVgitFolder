let a = document.querySelector('#custom-event-dispatcher');

let current;

const changePageSectionEvent = {
    trigger: (sectionName, payload) => {
        a.dispatchEvent(
            new CustomEvent('page-section-changed', {detail: sectionName, payload})
        );
        current = {detail: sectionName, payload};
    },
    intercept: (callback, current) => {
        a.addEventListener('page-section-changed', (event) => {
            callback(event, current)
        })
    },
    getCurrentSection: () => { return current }
}

export default changePageSectionEvent