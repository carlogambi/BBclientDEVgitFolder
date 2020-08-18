import langmanager from './../langs/langManager';

let a = document.querySelector('#custom-event-dispatcher');

export default {
    triggerChangeLangEvent: (lang) => {
        langmanager.setCurrentLang(lang)
        a.dispatchEvent(
            new CustomEvent(
                'lang-changed', 
                { detail: lang }
                )
            );

    },
    intereceptChangeLangEvent: (callback) => {
        a.addEventListener('lang-changed', (event) => {
            callback(event);
        })
    }
}
