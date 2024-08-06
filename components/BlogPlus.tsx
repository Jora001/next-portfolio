/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: true,
  responsive: [
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
  "/images/m1.jpg",
  "/images/m2.jpg",
  "/images/m3.jpg",
  "/images/m4.jpg",
  "/images/m5.jpg",
  "/images/m6.jpg",
  "/images/m7.jpg",
  "/images/m8.jpg",
  "/images/m9.jpg",

  "/images/m10.jpg",
  "/images/m11.jpg",
];

const BlogPlus = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        EVE<span className="text-blue-400">NTS</span>
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

export default BlogPlus;
