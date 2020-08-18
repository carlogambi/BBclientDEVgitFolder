import fr from './lang-pack-fr.json'
import ita from './lang-pack-ita.json'
import eng from './lang-pack-eng.json'

const langs = [ita, fr, eng ]
const defaultLang = 'ita';
let currentLang = defaultLang;



const langmanager =  {
    getLangPack: (toFind) => {
    if(langmanager.getLangList().includes(toFind)){
        return langs.find(l => { return l.lang === toFind })
    }else{
        throw new Error('1 LANGMANAGER ! langpack not present -> ' + toFind)
    }
    },
    getDefaultLang: () => {
        return defaultLang;
    },
    getLangList: () => {
        return langs.map(l => {
            return l.lang;
        })
    },
    getlangListWithoutCurrent: () => {
        return langmanager.getLangList().filter(l => { return l !== currentLang })
    },
    setCurrentLang: (lang) => {
        if(langmanager.getLangList().includes(lang)){
            currentLang = lang;
            currentlangPack = langmanager.getLangPack(currentLang);
        }else{
            throw new Error(lang + ' - language not present')
        }
    },
    getCurrentLang: () => {
        return currentLang;
    }, 
    getCurrentLangPack(){
        return currentlangPack;
    }
} 

let currentlangPack = langmanager.getLangPack(currentLang)


export default langmanager;