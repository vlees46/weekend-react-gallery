
function GalleryList({galleryData}) {
    console.log('this is the gallery list function data', galleryData[0].path)


    return (
        <div>
            <p>Gallery goes here</p>
            {/* Loop through the gallery list array and render the images, and text. */}
            {galleryData.map((galleryData) => { console.log('inside DIV',galleryData.path) 
                return <img key={galleryData.id} src={galleryData.path} width={100} height={100}/>
            })}
        </div>
    );
};

export default GalleryList;