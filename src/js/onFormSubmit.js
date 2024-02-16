import { refs } from './refs';
import { makeGalleryItem } from './createGallery';
import { onError } from './onError';
import { fetchImg } from './fetchImage';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import axios from 'axios';

// let page = 1;

// let limit = 15;

// const totalPages = Math.ceil(100 / limit);


// Btn.addEventListener("click", async () => {
//     // Check the end of the collection to display an alert
//     if (page > totalPages) {
//       return iziToast.error({
//         position: "topRight",
//         message: "We're sorry, there are no more posts to load"
//       });
//     }
  
//     try {
//       const posts = await fetchPosts();
//       renderPosts(posts);
//       // Increase the group number
//       page += 1;
  
//       // Replace button text after first request
//       if (page > 1) {
//         Btn.textContent = "Fetch more posts";
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   });


  export function onFormSubmit(event) {
    event.preventDefault();
    loaderOn();
    refs.galleryList.innerHTML = '';
    const userSearch = event.currentTarget.elements.input.value.trim();
  
    fetchImg(userSearch)
        .then(makeGalleryItem)
        .catch(onError)
        .finally(loaderOff);
  
    refs.form.reset();
  }