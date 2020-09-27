
import React from 'react';
import $ from 'jquery';
import changePageEvent from './../../custom-events/changePageEvent'

import '../../styles-components/page-body-components/voce-menu.css';
import changePageSectionEvent from '../../custom-events/changePageSectionEvent';
import visiblePageSectionEvent from './../../custom-events/visiblePageSectionEvent';
import historyManager from './../util/history-management';
import langmanager from '../../langs/langManager';

export default function VoceMenu (props) {

    let parent = props.parent;
    let isPagRef = props.isPagRef;
    let data= props.voce;
    let id = 'vm'+Math.round(Math.random()*1000000);
    let ancestor;
    if(!isPagRef){ ancestor = props.ancestor }

    const manageUnderLine = () => {
        $('.voce-menu-text').not('#title-vm-'+id).removeClass('underlined');
        $('#title'+id).addClass('underlined');    
    }

    const whenClicked = () => {
    manageUnderLine();
        if(data.contenuti.length > 0){
            if (!($('#'+id).is(':visible'))){
                $('#'+id).slideDown();
            }
        }
        if(isPagRef){
            changePageEvent.triggerChangePageEvent(props.voce.voce, 'voce-menu')
            changePageSectionEvent.trigger(props.voce.voce, 'voce-menu')
            $('.voce-menu-container').not('#' + id).slideUp();
        }else{
            changePageSectionEvent.trigger(props.voce.voce, 'voce-menu')
        }
        
        historyManager.newState({currentPage:props.voce.voce, lang: langmanager.getCurrentLang(), payload: {isPageRef: isPagRef}});
    }

    const buildChild = () => {
        if(data.contenuti.length !== 0){
            if(isPagRef){
                ancestor = id;
            }
            return data.contenuti.map((v, i) => 
            //-----------------ricorsione
            <VoceMenu key={i} voce={v} isPagRef = {false} parent={id} ancestor = {ancestor}/>
            )
        }
    }

    const getText = () => {
        if(isPagRef){
            return props.voce.voce.toUpperCase();
        }else{
            return props.voce.voce;
        }
    }

        const manageFocusedPage =() => {
        visiblePageSectionEvent.intercept((e) => {
            if((e.detail).replace(/-\s/gm, '') === props.voce.voce){
                $('.voce-menu-text').removeClass('underlined');
                $('#title'+id).addClass('underlined');
                $('#'+parent).slideDown();

                if (!($('#'+parent).is(':visible'))){
                    $('#' + id).slideDown();
                }
            }
        })
    }

    manageFocusedPage()

    visiblePageSectionEvent.intercept((e) => {
        if((e.detail).replace(/-\s/gm, '') === props.voce.voce){
            $('.voce-menu-text').removeClass('underlined');
            $('#title'+id).addClass('underlined');
            $('#'+parent).slideDown();

            if (!($('#'+parent).is(':visible'))){
                $('#' + id).slideDown();
            }
        }
    })

    let titleClasses = "voce-menu-text";
    if(isPagRef){
        titleClasses += ' first-page-voce';
    }

    let childFullVoceDecorator = '';
    let nestingEndDercorator = ''
    if((parent !== ancestor) && !isPagRef){
        nestingEndDercorator = ' -'
    }
    if(props.voce.contenuti.length > 0 && !isPagRef){
        childFullVoceDecorator = '+'
    }

    return <div className="voce-menu" >
                <div id={'title'+id} 
                    className= {titleClasses}
                    onClick={whenClicked}>
                        { childFullVoceDecorator + getText() + nestingEndDercorator}
                </div>
                <div 
                    id={id}
                    data-voce={props.voce.voce} 
                    className= 'voce-menu-container'>
                    {
                        buildChild()
                    }
                </div>
             </div>
}


// export default class VoceMenu extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             voce: props.voce.voce,
//             data: props.voce
//         };
        
        // this.parent = props.parent;
        // this.isPagRef = props.isPagRef;
        // this.data= props.voce;
        // this.id = 'vm'+Math.round(Math.random()*1000000);
        // if(!this.isPagRef){ this.ancestor = props.ancestor }
    //     this.whenClicked = this.whenClicked.bind(this);
    //     this.buildChild = this.buildChild.bind(this);

    // }
    
    // manageUnderLine(){
    //     $('.voce-menu-text').not('#title-vm-'+this.id).removeClass('underlined');
    //     $('#title'+this.id).addClass('underlined');    
    // }
        
    // whenClicked(){
    //     this.manageUnderLine();
    //     if(this.data.contenuti.length > 0){
    //         if (!($('#'+this.id).is(':visible'))){
    //             $('#'+this.id).slideDown();
    //         }
    //     }
    //     if(this.isPagRef){
    //         changePageEvent.triggerChangePageEvent(this.state.voce, 'voce-menu')
    //         changePageSectionEvent.trigger(this.state.voce, 'voce-menu')
    //         $('.voce-menu-container').not('#' + this.id).slideUp();
    //     }else{
    //         changePageSectionEvent.trigger(this.state.voce, 'voce-menu')
    //     }
        
    //     historyManager.newState({currentPage: this.state.voce, lang: langmanager.getCurrentLang(), payload: {isPageRef: this.isPagRef}});
    // }
    
    // buildChild(){
    //     if(this.data.contenuti.length !== 0){
    //         if(this.isPagRef){
    //             this.ancestor = this.id
    //         }
    //         return this.state.data.contenuti.map((v, i) => 
    //         //-----------------ricorsione
    //         <VoceMenu key={i} voce={v} isPagRef = {false} parent={this.id} ancestor = {this.ancestor}/>
    //         )
    //     }
    // }
    
    // componentWillReceiveProps(props){
    //     this.setState({
    //         voce: props.voce.voce,
    //         data: props.voce
    //     });

    // }

    // getText(){
    //     if(this.isPagRef){
    //         return this.state.voce.toUpperCase();
    //     }else{
    //         return this.state.voce;
    //     }
    // }

    // componentDidMount(){
    //     this.manageFocusedPage()
    // }

    // componentDidUpdate(){
        // this.manageFocusedPage()
    // }

    // manageFocusedPage(){
        // visiblePageSectionEvent.intercept((e) => {
        //     if((e.detail).replace(/-\s/gm, '') === this.state.voce){
        //         $('.voce-menu-text').removeClass('underlined');
        //         $('#title'+this.id).addClass('underlined');
        //         $('#'+this.parent).slideDown();

        //         if (!($('#'+this.parent).is(':visible'))){
        //             $('#' + this.id).slideDown();
        //         }
        //     }
        // })
    // }

    // render(){

        // let titleClasses = "voce-menu-text";
        // if(this.isPagRef){
        //     titleClasses += ' first-page-voce';
        // }

        // let childFullVoceDecorator = '';
        // let nestingEndDercorator = ''
        // if((this.parent !== this.ancestor) && !this.isPagRef){
        //     nestingEndDercorator = ' -'
        // }
        // if(this.data.contenuti.length > 0 && !this.isPagRef){
        //     childFullVoceDecorator = '+'
        // }

//         return <div className="voce-menu" >
//             <div id={'title'+this.id} 
//                 className= {titleClasses}
//                 onClick={this.whenClicked}>
//                     { childFullVoceDecorator + this.getText() + nestingEndDercorator}
//             </div>
//             <div 
//                 id={this.id}
//                 data-voce={this.state.voce} 
//                 className= 'voce-menu-container'>
//                 {
//                     this.buildChild()
//                 }
//             </div>
//         </div>
//     }
// }
