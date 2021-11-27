import { useState } from 'react';
import '../GalleryItem/GalleryItem.css';


function GalleryItem(){



    return (

        <div className="container">
            <li key={photo.id} className="picture">

                {
                    isPhotoClicked
                        ?
                        <div className="description" onClick={() => setIsPhotoClicked(!isPhotoClicked)}><span id="theText">{photo.description}<br/><br />{photo.location}</span></div>
                        :
                        <img className="image" width="200px" height="200" onClick={() => setIsPhotoClicked(!isPhotoClicked)} src={photo.path} />
                }

                <div className="likeSection">
                    <img className="loveButton" width="35px" onClick={() => addLike(photo.id)} src="/images/thumbs-up-icon.png" />

                    <span id="likesNumber">{likesDisplay}</span>
                </div>


            </li >

        </div>)


}

export default GalleryItem;



