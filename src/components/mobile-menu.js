import React from 'react'

import './../styles-components/mobile-menu.css'

import mobileMenuIcon from './../images/menu-icon.svg';
import mobileMenuIconCollapse from './../images/menu-icon-collapse.svg';
import MobileMenuContainer from './mobile-components/mobile-menu-container'

// import $ from 'jquery'

export default class MobileMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            props: props,
            visibility: false,
            icon: mobileMenuIcon
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    
    componentWillReceiveProps(props){
        this.setState({props: props})
    }

    toggleVisibility(){
        let oldVisibility = this.state.visibility;
        this.setState({visibility: !oldVisibility});
        
        if(this.state.icon === mobileMenuIcon){
            this.setState({icon: mobileMenuIconCollapse})
        }
        if(this.state.icon === mobileMenuIconCollapse){
            this.setState({icon: mobileMenuIcon})
        }
    }
    


    
    render(){
        return <div id="mobile-menu">
        <div
            id="icon-container"
            onClick={this.toggleVisibility}
            >
            <img 
                id="icon" 
                src={this.state.icon} 
                alt="mobile menu icon" 
                />
        </div>
            <MobileMenuContainer 
            menuInfo= {this.state.props.vociMenu}
            footerData= {this.state.props.footerData}
            visibility={this.state.visibility}
            />
    </div>
    }
}