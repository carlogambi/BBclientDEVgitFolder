let a = document.querySelector('#custom-event-dispatcher');

const changePageSectionEvent = {
    trigger: (sectionName, payload) => {
        a.dispatchEvent(
            new CustomEvent('page-section-changed', {detail: sectionName, payload})
        )
    },
    intercept: (callback) => {
        a.addEventListener('page-section-changed', (event) => {
            callback(event)
        })
    }
}

export default changePageSectionEvent