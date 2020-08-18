import React from 'react'
import Gallery from './../page-components/gallery'

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            props: props
        }
    }

    title(){
        if(this.state.props.page.voce){ 
            return <h1>{this.state.props.page.voce}</h1>
        }
    }
    subTitle(){
        if(this.state.props.page.subTitle){ 
            return <h4>{this.state.props.page.subTitle}</h4>
        }
    }
    gallery(){
        if(this.state.props.page.images || this.state.props.page.images.length !== -1){ 
            return <Gallery images = {this.state.props.page.images} />
        }
    }
    mainContent(){
        if(this.state.props.page.mainContent){ 
            return <p>{this.state.props.page.mainContent}</p>
        }
    }
    footer(){
        if(this.state.props.page.footer){ 
            return <p>{this.state.props.page.footer}</p>
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
        return <div>
        {this.title()}
        {this.subTitle()}
        {this.gallery()}
        {this.mainContent()}
        {this.footer()}
        </div>
    }
}