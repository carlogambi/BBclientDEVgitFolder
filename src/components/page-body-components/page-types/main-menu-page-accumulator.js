import React from 'react';

import langmanager from './../../../langs/langManager';
import FirstLevelPage from './first-level-page-main-menu'
import SecondLevelPage from './second-level-page-main-menu'
import ThirdLevelPage from './third-level-page-main-menu'

import visibleInScroll from'./../../util/visible-in-scroll'

let pageAccumulator = [];
let deepness = 0;

function getKey(){ return Math.round(Math.random()*100000) + '' }
const getRandomId = () => { return 'pageSection'+getKey(); }

let id;

export default class MainMenuPageAccumulator extends React.Component{

    constructor(props){
        super(props);
        this.idList= []
        this.state = {
            props,
            
        }
        this.recursivePageLeveller = this.recursivePageLeveller.bind(this);
    }

    recursivePageLeveller(voceMenu){
        const rawPage = langmanager.getCurrentLangPack().pagine.find(p => p.voce === voceMenu.voce)
        id = getRandomId();
        this.idList.push(id);
        switch (deepness) {
            case 0:
                pageAccumulator.push(<FirstLevelPage id={id} key={'vm'+getKey()} page = { rawPage }/>)
                break;
                case 1:
                    pageAccumulator.push(<SecondLevelPage id={id} key={'vm'+getKey()} page = { rawPage }/>)
                    break;
                    case 2:
                        pageAccumulator.push(<ThirdLevelPage id={id} key={'vm'+getKey()} page = { rawPage }/>)
                        break;
                        default:    
                        break;
                        
                    }
        if(voceMenu.contenuti){
            if(voceMenu.contenuti.length !== -1){
                deepness++;
                voceMenu.contenuti.forEach(vm => this.recursivePageLeveller(vm));
                deepness--; 
            }   
        }
    }
    
    componentDidMount(){
        this.idList.forEach(id => visibleInScroll(id, 'main-container'));
    }

    componentDidUpdate(){
        this.idList.forEach(id => visibleInScroll(id, 'main-container'));

    }

    

    componentWillUpdate(){
        this.idList = [];
    }

    render(){
    pageAccumulator = [];
    this.recursivePageLeveller(
        langmanager.getCurrentLangPack().vociMenu.find(vM => {
            return vM.voce === this.props.page.voce
        })
    )
    return <React.Fragment>
        {pageAccumulator}
    </React.Fragment>
    }

}