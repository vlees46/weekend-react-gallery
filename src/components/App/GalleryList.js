import { useState } from 'react';
import GalleryItem from './GalleryItem'

function GalleryList({Gallery}) {
    return (
        <div className="List">
            {Gallery.map((Gallery) => {
                return <GalleryItem GalleryItem={Gallery}/>
            })}   
        </div>
    )
}

export default GalleryList;