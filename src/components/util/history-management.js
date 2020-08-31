
const historyManager = {
    newState: ({currentPage, lang, payload}) => {
        window.history.pushState({currentPage, lang, payload}, currentPage, window.location.href )
     },
    getState: () => { 
        return window.history.state;
     },
    interceptChangeState: (callback) => { 
        window.onpopstate = (event) => { callback(event, historyManager.getState()) }
     }
}

export default historyManager