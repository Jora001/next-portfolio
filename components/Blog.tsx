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
    // Add your image URLs here
    "https://media.licdn.com/dms/image/D4D22AQG6JlVckntcGQ/feedshare-shrink_1280/0/1712169215442?e=1724284800&v=beta&t=wsipcA7xWWwc_y9UBCH6jHFQxaLARQ-6c5zSWc5o6rQ",
    "https://media.licdn.com/dms/image/D4E2DAQH0NRdYKvWupQ/profile-treasury-image-shrink_1920_1920/0/1710757112258?e=1721768400&v=beta&t=zx1ggF-FrhdNNciqWgB9VNHP1en0Y-lj-z6rPi_lKzs",
    "https://media.licdn.com/dms/image/D4E2DAQFeif_KxW97Cg/profile-treasury-image-shrink_1920_1920/0/1712088776818?e=1721768400&v=beta&t=vZRY3h-mZ_MgrP3LNR0LT_pdszEIQhvo1NjEUaClpy0",
    "https://media.licdn.com/dms/image/D4E2DAQFquGbuyE1JeQ/profile-treasury-image-shrink_800_800/0/1696070167018?e=1721768400&v=beta&t=xaAWb2TxhmMr8Aha8mONs4EBEbN4RFQVQfFSIkixai0",
    "https://media.licdn.com/dms/image/D4E2DAQEkOw6xLa5AaQ/profile-treasury-image-shrink_1920_1920/0/1710756943568?e=1721768400&v=beta&t=zZ_KZNFnq-D_2z-EL-o9PaMJ9TZOpyW1_483qt7KLcI",
    "https://media.licdn.com/dms/image/D4E2DAQG1G1XU0QgTsQ/profile-treasury-image-shrink_1920_1920/0/1713352260569?e=1721768400&v=beta&t=zqWDTGdiPeiXDcyFCz6VdvTvColavxiD2-VNJUW3HxE",

    "https://media.licdn.com/dms/image/D4E2DAQHyFGf2-xwPBQ/profile-treasury-image-shrink_1920_1920/0/1696069481722?e=1721768400&v=beta&t=AxDdAGEwpBEOL7TFUgFND6e0CIuzPW0RQ6fIOZG4X0s",
    "https://media.licdn.com/dms/image/D4E2DAQH-SRquuAy_8A/profile-treasury-image-shrink_1920_1920/0/1696069649621?e=1721768400&v=beta&t=qTM7Qs1Lf-QA7tU1l2Bo-6wn5nRwlDniKZzuuOWzw30",
    "https://media.licdn.com/dms/image/D4D22AQG6JlVckntcGQ/feedshare-shrink_1280/0/1712169215442?e=1724284800&v=beta&t=wsipcA7xWWwc_y9UBCH6jHFQxaLARQ-6c5zSWc5o6rQ",
    "https://media.licdn.com/dms/image/D4E2DAQGo-SdyAneIdA/profile-treasury-image-shrink_1920_1920/0/1696069802339?e=1721768400&v=beta&t=X5NkeZu7n9vUxIHFodDyBsSk4Wp_3Vhcsp87gZI10lc",
  ];

  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MY <span className="text-yellow-400">Certifications</span>
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
