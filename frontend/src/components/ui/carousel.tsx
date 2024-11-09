
import React, { useState, useEffect } from "react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import Swiper from "swiper";

// Import images
import img1 from "../../assets/carouselImages/img1.jpeg";
import img2 from "../../assets/carouselImages/img2.jpeg";
import img3 from "../../assets/carouselImages/img3.jpeg";
import img4 from "../../assets/carouselImages/img4.jpeg";
import img5 from "../../assets/carouselImages/img5.jpeg";

// The main Carousel component
const ArcCarousel: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true, // Allow looping of the carousel
      spaceBetween: 30, // Space between each slide
      slidesPerView: "auto", // Automatically adjust the size of each slide
      centeredSlides: true, // Ensure the active slide is always in the center
      autoplay: {
        delay: 2000, // Move to next slide every 2 seconds
        disableOnInteraction: false, // Allow autoplay after user interaction
      },
      speed: 1000, // Set the speed of the transition (1 second)
      effect: "slide", // Use the slide effect
      on: {
        init: () => {
          console.log("Swiper initialized");
        },
      },
    });

    setSwiperInstance(swiper); // Save the swiper instance to control it later if needed

    return () => swiper.destroy(); // Cleanup Swiper instance when component unmounts
  }, []);

  // Dummy images
  const images = [img1, img2, img3, img4, img5];

  // Optional: Mouse hover events to stop/start autoplay
  useEffect(() => {
    const handleMouseEnter = () => {
      swiperInstance?.autoplay.stop(); // Stop autoplay on hover
    };

    const handleMouseLeave = () => {
      swiperInstance?.autoplay.start(); // Restart autoplay when mouse leaves
    };

    const swiperContainer = document.querySelector(".swiper-container");
    swiperContainer?.addEventListener("mouseenter", handleMouseEnter);
    swiperContainer?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperContainer?.removeEventListener("mouseenter", handleMouseEnter);
      swiperContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [swiperInstance]);

  return (
    <div className="swiper-container my-10 w-[80%] sm:w-[60%] lg:w-[40%] mx-auto">
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

export default ArcCarousel;
