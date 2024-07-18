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
  "https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/396851943_1999687540411173_335610266609612301_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wLcELIpZnTUQ7kNvgEGuQ5s&_nc_ht=scontent.fevn12-1.fna&oh=00_AYBceORbk-uqgpxldnZgMGL7LrooWwLPKGd5oB1BfqNDSQ&oe=669D7D0B",
  "https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/420191231_122141129648055335_1886598037783444395_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QdW_eODgM6IQ7kNvgHejXV_&_nc_ht=scontent.fevn2-1.fna&oh=00_AYAVC71EdsaHe48J2kETpX708ithNM9vHusx8H9hro8YjQ&oe=669D9FAA",
  "https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/450539987_1535393680639092_639531768118867706_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9UuVKJQoThcQ7kNvgFQzkim&_nc_ht=scontent.fevn2-1.fna&oh=00_AYA_SkygF0zbmUj7_e9Ru9N4ncOna2hZWpA6yZrj_OUTDQ&oe=669D87B8",
  "https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/442420562_1819794961759344_6316556475476267805_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ScGSewWAhzsQ7kNvgGySSSy&_nc_ht=scontent.fevn2-1.fna&oh=00_AYAv45mbIp_j-NqzXCUMd3WtoUJ_uDRZ8xMmmOzItRE-gg&oe=669D9033",
  "https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/352212834_1023666589012744_2922296490097478257_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BM8dojCbahYQ7kNvgHrRkLw&_nc_ht=scontent.fevn12-1.fna&oh=00_AYCoEsZ1dMuoiBceTUwhZTDUlOEZ7fznONZ2lI8RovMCDw&oe=669DA2BA",
  "https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/399078613_3612921822318300_4898244190652407632_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7P94wVO7S4oQ7kNvgEHG4g2&_nc_ht=scontent.fevn2-1.fna&oh=00_AYCZJetHtXVtnAEoLz1Gf4Yhe-d0-g1h9Ww2a1m0bVYgsw&oe=669D8AD6",
  "https://scontent.fevn2-1.fna.fbcdn.net/v/t39.30808-6/352351071_762899085519167_3566194410208319427_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GsWXNNW7jOYQ7kNvgG7L9QQ&_nc_ht=scontent.fevn2-1.fna&oh=00_AYBTbq45jbmzEh4GXfIpiUw5lmZMnGB1KE3l7oPfYM3gHQ&oe=669D988B",
  "https://scontent.fevn12-1.fna.fbcdn.net/v/t1.6435-9/42738374_515971732141680_4319698224496508928_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=gTrRUl8svMYQ7kNvgEDw8cH&_nc_ht=scontent.fevn12-1.fna&oh=00_AYADrh5KgN7etM2DyghmN2AFMuCudA8iVwSkS7oXZE85Yw&oe=66BF16F5",
  "  https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/403720447_10231647025741517_2077038398871675839_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GJyGx1d-1REQ7kNvgE3bwMY&_nc_ht=scontent.fevn12-1.fna&oh=00_AYCtUbCn78rLuWiLNQxBIQYtFl5t_W5vPT3ZNXt1Ll7ctw&oe=669D7DA0",

  "https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/397109541_1361736741338121_5885791458495924433_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XISIUc29tOsQ7kNvgFbP15E&_nc_ht=scontent.fevn12-1.fna&oh=00_AYAqkjpt4BXi3v-d2Et78pX9ZrkDASXJrUuVpGdORmAsMQ&oe=669D784F",
  "https://scontent.fevn2-1.fna.fbcdn.net/v/t1.6435-9/120039475_2757634771180347_3230420979736677204_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=tEqYQ9HRP4oQ7kNvgGriks5&_nc_ht=scontent.fevn2-1.fna&oh=00_AYCHFwqySPCwWJ1m-ff0FqEUnr8q9T3rJt_gcmYVUhMDSA&oe=66BF2AE2",
];

const BlogPlus = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        EVE<span className="text-yellow-400">NTS</span>
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
