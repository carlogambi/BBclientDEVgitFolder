import React from 'react'

import './../../../styles-components/page-body-components/page-types/footer-menu-derived-page.css'

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            props: props
        }
    }

    title(){
        if(this.state.props.page.voce){ 
            return <h1 className="f-d-p-title" >{this.state.props.page.voce}</h1>
        }
    }
    subTitle(){
        if(this.state.props.page.subTitle){ 
            return <h4 className="f-d-p-subtitle" dangerouslySetInnerHTML={{__html: this.state.props.page.subTitle}}></h4>
        }
    }

    mainContent(){
        if(this.state.props.page.mainContent){ 
            return <div className="f-d-p-main-content" dangerouslySetInnerHTML={{__html: this.state.props.page.mainContent}}></div>
        }
    }
    footer(){
        if(this.state.props.page.footer){ 
            return <div className="f-d-p-footer" dangerouslySetInnerHTML={{__html: this.state.props.page.footer}}></div>
        }
    }


    componentDidUpdate(){
        document.getElementsByClassName('main-container')[0].scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    componentWillReceiveProps(props){
        this.setState({
            props: props
        })
        this.forceUpdate();
    }

    render(){
        return <div className="footer-derived-page">
        {this.title()}
        {this.subTitle()}
  
        {this.mainContent()}
        {this.footer()}
        </div>
    }
}