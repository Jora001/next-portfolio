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
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const images = [
    "/images/561225209_4217145415229268_7054502403113477517_n.jpg",
  "/images/560508846_4218733165070493_6105789055106094710_n.jpg",

  "/images/421.jpg",
  "/images/m1.jpg",
  "/images/484727950_2353356678377589_5696544542029974731_n.jpg",
  "/images/m2.jpg",
    "/images/558776324_4215299115413898_4686271234641084103_n.jpg",

  "/images/m3.jpg",
  "/images/m4.jpg",
  "/images/423.jpg",
    "/images/561738185_4218733191737157_6857013221172269217_n.jpg",

  "/images/m5.jpg",
  "/images/m6.jpg",
  "/images/photo_2025-04-19_16-44-44.jpg",
  "/images/m7.jpg",
  "/images/m8.jpg",
  "/images/m9.jpg",
  "/images/m10.jpg",
];

const BlogPlus = () => {
  return (
    <section className="bg-[#02050a] py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          EVE<span className="text-blue-400">NTS</span>
        </h1>
        <p className="mt-4 text-gray-400 text-base md:text-lg">
        </p>
      </div>
      <div className="w-[90%] max-w-6xl mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-4">
              <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogPlus;
