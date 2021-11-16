import React from 'react'

export default function CarouselMenu( { noOfImages, currentImage }) {
    return (
        <div className = 'carousel-menu'>
         { currentImage } / { noOfImages } 
        </div>
    )
}
