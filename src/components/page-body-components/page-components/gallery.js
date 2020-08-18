import React from 'react';

import './../../../styles-components/page-body-components/gallery.css'

// import $ from 'jquery'

export default class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            images: props.images,
            current: 0,
        }
        this.id = '#galery-img-' + Math.round(Math.random()*1000000)
        this.nextImg = this.nextImg.bind(this);
        this.prevImg = this.prevImg.bind(this);
        this.buildIndicators = this.buildIndicators.bind(this);
    }


    nextImg(){
        if(this.state.current < this.state.images.length-1){
            this.setState(prev => ({ current: prev.current+1 }))
        }
    }

    prevImg(){
        if(this.state.current > 0){
        this.setState(prev => ({ current: prev.current-1 }))
        }

    }

    componentWillReceiveProps(props){
        this.setState({
            images: props.images,
            current: 0
        })
    }

    buildIndicators(){
        return this.state.images.map((img,i) => {
            if(i === this.state.current){
                return <span key={i}>+</span>
            }else{
                return <span className="light-when-over" key={i}
                onClick={() => {
                    this.setState({
                        current: i
                    })
                }}
                >-</span>
            }
        })
    }

    render() {
        return <div className="prova-gallery">
            <div className="gallery">
                <div className="gallery-img" id={this.id}>
                    <img 
                    alt={'img'} 
                    src={this.state.images[this.state.current]} 
                    />
                </div>
                <div className="gallery-control">
                    <span className= "gallery-button light-when-over" onClick={this.prevImg}>{'<'}</span>
                    <span className="gallery-indicators">{this.buildIndicators()}</span>
                    <span className= "gallery-button light-when-over" onClick={this.nextImg}>{'>'}</span>
                </div>
            </div>
        </div>

    }

}