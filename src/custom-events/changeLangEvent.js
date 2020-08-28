import langmanager from './../langs/langManager';
import $ from 'jquery'
let a = document.querySelector('#custom-event-dispatcher');

const updateHtmlLangAttribute = (lang) => {
    if($('html').attr('lang') !== lang){
        $('html').attr('lang', lang);
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
        updateHtmlLangAttribute(lang);

    },
    intereceptChangeLangEvent: (callback) => {
        a.addEventListener('lang-changed', (event) => {
            callback(event);
        })
    }
}
