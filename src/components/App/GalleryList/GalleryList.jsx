import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryList/GalleryList.css';

function GalleryList({ galleryArray, getGallery }) {

return (

    <ul className="list">

        {galleryArray.map(photo => (
            <GalleryItem
                key={photo.id}
                photo={photo}
                isPhotoClicked={isPhotoClicked}
                setIsPhotoClicked={setIsPhotoClicked}
                addLike={addLike}
            />
        ))}
    </ul>

)

}

export default GalleryList; // export to App