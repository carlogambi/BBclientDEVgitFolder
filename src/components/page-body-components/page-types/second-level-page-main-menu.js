import React, {useEffect} from 'react'
import './../../../styles-components/page-body-components/page-types/second-level-page-main-menu.css';

import $ from 'jquery'

export default  (props) => {

    const manageVideoLoad = () => {
        $('.s-l-mainContent video').css({opacity: 0});
        $('.s-l-mainContent video').each((i, video) => {
            $(video).on('canplay', () => {
                if($(video).css('opacity') === '0'){
                    $(video).animate({ opacity: 1 }, 500);
                }
            })
        })
    }

    const manageImgLoad = () => {
        $('.s-l-page img').css({opacity: 0});
        $('.s-l-page img').each((i, img) => {
            $(img).ready(() => {
                if($(img).css('opacity') === '0'){
                    $(img).animate({ opacity: 1 }, 500);
                }
            })
        })
    }

    useEffect(() => {
        manageVideoLoad()
        manageImgLoad()
    })

    return <div className="s-l-page" id={props.id} data-voce-ref={props.page.voce}>
                {props.page.voce?<h1 className="s-l-title" >{props.page.voce}</h1>:null}        
                {props.page.subTitle?<h4 className="s-l-subtitle" dangerouslySetInnerHTML={{__html: props.page.subTitle}}></h4>:null}        
                {props.page.mainContent?<div className="s-l-main-content" dangerouslySetInnerHTML={{__html: props.page.mainContent}}></div>:null}        
                {props.page.footer?<div className="s-l-footer" dangerouslySetInnerHTML={{__html: props.page.footer}}></div>:null}        
            </div>
}

// export default class SlPage extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             props
//         }
//     }

//     manageVideoLoad(){
//         $('.s-l-mainContent video').css({opacity: 0});
//         $('.s-l-mainContent video').each((i, video) => {
//             $(video).on('canplay', () => {
//                 if($(video).css('opacity') === '0'){
//                     $(video).animate({ opacity: 1 }, 500);
//                 }
//             })
//         })
//     }

//     manageImgLoad(){
//         $('.s-l-page img').css({opacity: 0});
//         $('.s-l-page img').each((i, img) => {
//             $(img).ready(() => {
//                 if($(img).css('opacity') === '0'){
//                     $(img).animate({ opacity: 1 }, 500);
//                 }
//             })
//         })
//     }

//     componentDidUpdate(){
//         this.manageVideoLoad();
//     }
    
//     componentDidMount(){
//         this.manageVideoLoad();        
//     }

//     title(){
//         if(this.props.page.voce){ 
//             return <h1 className="s-l-title">{this.props.page.voce}</h1>
//         }
//     }
//     subTitle(){
//         if(this.props.page.subTitle){ 
//             return <h4 className="s-l-subTitle"  dangerouslySetInnerHTML={{__html: this.props.page.subTitle}}></h4>
//         }
//     }

//     mainContent(){
//         if(this.props.page.mainContent){ 
//             return <div className="s-l-mainContent" dangerouslySetInnerHTML={{__html: this.props.page.mainContent}} />;
//         }
//     }
//     footer(){
//         if(this.props.page.footer){ 
//             return <div className="s-l-footer" dangerouslySetInnerHTML={{__html: this.props.page.footer}} />;
//         }
//     }

//     render(){
//         return <div className="s-l-page" id={this.props.id} data-voce-ref={this.props.page.voce}>
//             {this.title()}
//             {this.subTitle()}
//             {this.mainContent()}
//             {this.footer()}
//         </div>
//     }
// }