/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
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
    "/images/cer1.jpg",
    "/images/cer3.jpg",

    "/images/sasser.jpg",
    "/images/cer4.jpg",

    "/images/cer2.jpg",


    "/images/cer6.jpg",
    "/images/cer5.jpg",

    "/images/cer7.jpg",
    "/images/cer8.jpg",
  ];

  return (
    <section id="blog" className="bg-[#02050a] py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          MY <span className="text-blue-400">Certifications</span>
        </h1>
        <p className="mt-4 text-gray-400 text-base md:text-lg">
        </p>
      </div>

      <div className="w-[90%] max-w-6xl mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-4">
              <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white">
                <img
                  src={img}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-[350px] object-contain p-4 bg-[#f9f9f9]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
