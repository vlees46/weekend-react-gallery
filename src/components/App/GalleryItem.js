import { useState } from 'react';

function GalleryItem({Gallery}) {

    const [showwDescription, setDescription] = useState(Gallery.description)

// One way to conditionally render stuff:
const displayDescription = () => {
    if (showwDescription) {
      return Gallery.description;
    } else {
      return Gallery.description;
    };
  };

 const flipDescription = () => {
    if (showwDescription) {
      setDescription(false);
    } else {
      setDescription(true);
      }
    };

    return (
        <li>
          {displayDescription()}
          {/* Another way to conditionally render stuff. Ternary: */}
          {/* {showEnglish ? snack.englishName : snack.frenchName} */}
    
          {/* This next bit is called "short circuiting"
          The code to the right of the "&&" will only exectute if the
            expression to the left of the "&&" evaluates to true: */}
          {/* {snack.displayEnglish && '🇺🇸'} */}
    
          <button onClick={flipDescription}>
            {/* Using a ternary to control which emoji is rendered
              in our button element: */}
            {showwDescription ? '🇫🇷' : '🇺🇸'}
          </button>
        </li>
      )
    }
    
    
    export default GalleryItem ;    