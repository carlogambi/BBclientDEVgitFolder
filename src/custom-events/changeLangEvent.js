import langmanager from './../langs/langManager';
import $ from 'jquery'
let a = document.querySelector('#custom-event-dispatcher');

const updateHtmlLangAttribute = (event) => {
    if($('html').attr('lang') !== event.detail){
        $('html').attr('lang', event.detail);
    }
}

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
            updateHtmlLangAttribute(event);
        })
    }
}
