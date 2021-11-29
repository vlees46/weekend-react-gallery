# Project Name

WEEKEND-REACT-CHALLENGE

## Description

The goal of this Weekend-React-Gallery is to create a gallery page to share pictures of things that are important to me. Visitors
will be able to click on an image to see a description and use a "like" button if the visitor like that particular photo.

## Screen Shot:  To Do Application
<p align="center">
  <img src="/server/public/images/TodoScreen.PNG" width="800" height="500 title="hover text">
   <img src="/server/public/images/Screenshot.PNG" width="800" height="500 title="hover text">

# High Level Check List

## TASK LIST:

 - [x]  Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`
 - [x]  Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
 - [X]  Iterate (loop over) the list of gallery data
 - [X]  Make GalleryItems
 - [X]  Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`.
 - [X]  Update the `GalleryList` to use this component to display an image.
 - [X]  Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
 - [X]  Display the number likes for each item and include a like button.
 - [X]  When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
 - [X]  Update the gallery each time a like button is clicked.
    