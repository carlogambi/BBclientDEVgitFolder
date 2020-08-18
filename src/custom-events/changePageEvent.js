import pageManager from './../components/util/page-manager'

let a = document.querySelector('#custom-event-dispatcher');

export default {
    triggerChangePageEvent: (currentPage, origin) => {
        pageManager.setCurrentPage(currentPage)
        a.dispatchEvent(
            new CustomEvent(
                'page-changed',{detail: {origin}}
                )
            );

    },
    intereceptChangePageEvent: (callback) => {
        a.addEventListener('page-changed', (event) => {
            callback(event);
        })
    }
}
