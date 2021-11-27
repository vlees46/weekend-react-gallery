import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem.jsx'
import '../GalleryList/GalleryList.css';

function GalleryList({ getgalleryArray, getGallery }) {

    let [isClicked, setIsClicked] = useState(false);


    //PUT - to add likes ...is this supposed to stay on the app.jsx page?
    const addLike = (galleryID) => {
        console.log('adding Like to photo with galleryID:', galleryID)
        axios({
            method: 'PUT',
            url: 'gallery/like/' + galleryID
        }).then(function (response) {
            console.log('Adding like to photo with ID:', galleryID)
            getGallery();
        }).catch(function (error) {
            console.log('error in CLIENT-side PUT function:', error)
        })
    } // end PUT function to add a like (working)



return (

    <ul className="list">

        {getgalleryArray.map(photo => (
            <GalleryItem
                key={photo.id}
                photo={photo}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
                addLike={addLike}
            />
        ))}
    </ul>

)

}

export default GalleryList; // export to App