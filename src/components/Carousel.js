import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import * as Spinners from 'react-spinners';
import CarouselMenu from './CarouselMenu';

export default function Carousel( {images} ) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const[imageLoading, setImageLoading] = useState(true);
    const length = images.length;    


    if(!Array.isArray(images) || images.length <=0) {
        return null;
    }

    const nextSlide = () => {
        setCurrentImageIndex(currentImageIndex === length-1 ? 0 : currentImageIndex+1)
        setImageLoading(true)
    }

    const prevSlide = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? length -1 : currentImageIndex-1)
        setImageLoading(true)
    }

    const imageLoaded = () => {
        setImageLoading(false)
    }

    document.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowRight') {
            nextSlide()
        } 

        if(e.key === 'ArrowLeft') {
            prevSlide()
        }
    })

    return (
        <section className = "slider" >
            <FaArrowAltCircleLeft className = "left-arrow" onClick = { prevSlide } />
            <FaArrowAltCircleRight className = "right-arrow" onClick = { nextSlide } />
            { images.map((slide, index) => {
                return (
                    <div className = { index === currentImageIndex ? 'slide-active' : 'slide'} key = { index } >
                    <Spinners.PropagateLoader loading = { imageLoading } color = '#c3073f' css = "z-index: 10; position: absolute; top: 50%; left: 50%;"/>
                        { index === currentImageIndex && 
                        (   
                            <img src = { slide.url } alt = "carousel image" className = { imageLoading ? 'carousel-image-hidden' : 'carousel-image' } onLoad = { imageLoaded } />                   
                        )}
                        
                    </div>
                    
                )
            }) } 
            <CarouselMenu noOfImages = { length } currentImage = { currentImageIndex }/>
        </section>
    )
}
