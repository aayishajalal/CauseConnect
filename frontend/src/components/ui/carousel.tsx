

// import React, { useEffect } from "react";
// import "swiper/swiper-bundle.css"; // Import Swiper styles
// import Swiper from "swiper";

// // Import images
// import img1 from "../../assets/carouselImages/img1.jpeg";
// import img2 from "../../assets/carouselImages/img2.jpeg";
// import img3 from "../../assets/carouselImages/img3.jpeg";
// import img4 from "../../assets/carouselImages/img4.jpeg";
// import img5 from "../../assets/carouselImages/img5.jpeg";

// // The main Carousel component
// const DynamicCarousel: React.FC = () => {
//   useEffect(() => {
//     // Initialize Swiper on component mount
//     const swiper = new Swiper(".swiper-container", {
//       loop: true, // Allow looping of the carousel
//       spaceBetween: 0, // No space between each slide
//       slidesPerView: "auto", // Automatically adjust the size of each slide
//       centeredSlides: true, // Ensure the active slide is always in the center
//       autoplay: {
//         delay: 1, // Move to next slide every 1 millisecond
//         disableOnInteraction: false, // Allow autoplay after user interaction
//       },
//       speed: 3000, // Transition speed (3 seconds for continuous effect)
//       effect: "slide", // Use the slide effect
//       freeMode: true, // Allow free scrolling without snapping to slides
//       loopAdditionalSlides: 10, // Preload more slides to ensure smooth continuous scroll
//       slidesPerGroup: 1, // Move 1 slide at a time
//     });

//     return () => swiper.destroy(); // Cleanup Swiper instance when component unmounts
//   }, []);

//   // Dummy images
//   const images = [img1, img2, img3, img4, img5];

//   return (
//     <div className="swiper-container my-10 w-full sm:w-[80%] lg:w-[60%] mx-auto overflow-hidden">
//       <div className="swiper-wrapper">
//         {images.map((src, index) => (
//           <div key={index} className="swiper-slide">
//             <div className="rounded-lg shadow-lg overflow-hidden">
//               <img
//                 src={src}
//                 alt={`Carousel Image ${index + 1}`}
//                 className="w-full h-[300px] object-cover transition-all duration-500 transform hover:scale-110 hover:brightness-75"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DynamicCarousel;



import React, { useEffect } from "react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import Swiper from "swiper";

// Import images
import img1 from "../../assets/carouselImages/img1.jpeg";
import img2 from "../../assets/carouselImages/img2.jpeg";
import img3 from "../../assets/carouselImages/img3.jpeg";
import img4 from "../../assets/carouselImages/img4.jpeg";
import img5 from "../../assets/carouselImages/img5.jpeg";

// The main Carousel component
const DynamicCarousel: React.FC = () => {
  useEffect(() => {
    // Initialize Swiper on component mount
    const swiper = new Swiper(".swiper-container", {
      loop: true, // Allow looping of the carousel
      spaceBetween: 20, // Space between each slide (set to 20px)
      slidesPerView: "auto", // Automatically adjust the size of each slide
      centeredSlides: true, // Ensure the active slide is always in the center
      autoplay: {
        delay: 3000, // Move to next slide every 3 seconds
        disableOnInteraction: false, // Allow autoplay after user interaction
      },
      speed: 3000, // Transition speed (3 seconds for continuous effect)
      effect: "slide", // Use the slide effect
      freeMode: true, // Allow free scrolling without snapping to slides
      loopAdditionalSlides: 10, // Preload more slides to ensure smooth continuous scroll
      slidesPerGroup: 1, // Move 1 slide at a time
      direction: "horizontal", // Ensure the direction is set to horizontal (left to right by default)
    });

    return () => swiper.destroy(); // Cleanup Swiper instance when component unmounts
  }, []);

  // Dummy images
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="swiper-container my-10 w-full sm:w-[80%] lg:w-[60%] mx-auto overflow-hidden">
      <div className="swiper-wrapper">
        {images.map((src, index) => (
          <div key={index} className="swiper-slide">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={src}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-[300px] object-cover transition-all duration-500 transform hover:scale-110 hover:brightness-75"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicCarousel;
