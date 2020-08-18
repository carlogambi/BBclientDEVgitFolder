
import langmanager from './../../langs/langManager';
import changeLangEvent from './../../custom-events/changeLangEvent'
import changePageEvent from './../../custom-events/changePageEvent'

let currentLangPack = langmanager.getCurrentLangPack();
let currentPage = currentLangPack.pagine.find(p => p.isFirstPage === true);
let isFirstPage = true;

function updateCurrentLangPack(){
    let currentlang = langmanager.getCurrentLang();
    if(currentLangPack.lang !== currentlang){
        currentLangPack = langmanager.getCurrentLangPack();
    }
}

changeLangEvent.intereceptChangeLangEvent((e) => {
    updateCurrentLangPack()
    currentPage = currentLangPack.pagine.find(p => p.id === currentPage.id)
    changePageEvent.triggerChangePageEvent(currentPage.voce)
})


const pageManager = {
    setCurrentPage: (vocePag) => {
        // console.log(vocePag)
        updateCurrentLangPack();
        isFirstPage = false;
        let oldPage = currentPage;
        currentPage = currentLangPack.pagine.find(p =>  p.voce === vocePag );
        if(currentPage === undefined){
            currentPage = oldPage;
            throw new Error('! page not found in current language pack ! \n missing page with title: ->' + vocePag + '<- in\n current language pack: -> ' + currentLangPack.lang + '<-')
        }
    }
    ,
    getCurrentPage: () => {
        updateCurrentLangPack();
        currentPage.isFirstPage = isFirstPage;
        return currentPage;
    }
}

export default pageManager;