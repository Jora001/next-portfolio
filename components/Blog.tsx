/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop sliding
    speed: 500, // Slide transition speed (ms)
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Auto play speed (ms)
    pauseOnHover: true, // Pause auto play on hover
    arrows: true, // Show navigation arrows
    responsive: [
      // Responsive breakpoints
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [
    "/images/cer1.jpg",
    "/images/cer2.jpg",
    "/images/cer3.jpg",
    "/images/cer4.jpg",
    "/images/cer5.jpg",
    "/images/cer6.jpg",
    "/images/cer7.jpg",
    "/images/cer8.jpg",
  ];

  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MY <span className="text-blue-400">Certifications</span>
      </h1>
      <div className="mt-[4rem] w-[80%] mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="p-[1rem]">
              <img src={img} alt={`Slide ${index}`} className="w-full h-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
