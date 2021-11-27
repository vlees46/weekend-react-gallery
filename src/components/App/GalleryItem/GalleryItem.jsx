import { useState } from 'react';
import '../GalleryItem/GalleryItem.css';


function GalleryItem( {photo, addLike}){

    let [isClicked, setisClicked] = useState(false);
    let likesDisplay;

    if(photo.likes == 0){
        likesDisplay = "No likes yet";
    }
    else if(photo.likes > 0) {
        likesDisplay = photo.likes;
    }

    return (

        <div className="container">
            <li key={photo.id} className="picture">

                {
                    isClicked
                        ?
                        <div className="description" onClick={() => setisClicked(!isClicked)}><span id="theText">{photo.description}<br/><br />{photo.location}</span></div>
                        :
                        <img className="image" width="200px" height="200" onClick={() => setisClicked(!isClicked)} src={photo.path} />
                }

                <div className="likeSection">
                    <img className="thumbsupbutton" width="35px" onClick={() => addLike(photo.id)} src="/images/thumbs-up-icon.png" />

                    <span id="likesNumber">{likesDisplay}</span>
                </div>


            </li >

        </div>)


}

export default GalleryItem;



