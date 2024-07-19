import React, { useState, useEffect } from "react";
import ClientReview from "./ClientReview";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    image: "/images/c1.jpg",
    name: "Hovhannes Khachatryan",
    role: "Software & Automatation Developer",
    text: "I wholeheartedly recommend Jor for their purposeful, active, and clever mindset. Their dedication and intelligence make them an invaluable addition to any team or project. 🌟",
  },
  {
    image: "/images/c2.jpg",
    name: "Elmira Papoyan",
    role: "Front end Web Developer",
    text: "During our time studying together, Jora consistently showed a strong commitment to doing well in our studies.  He works really hard and never gives up, making him a great study partner. 🚀 Jora is excellent at understanding difficult ideas quickly, which helps us study more efficiently. Not only is Jora a hard worker, but he is also very kind and supportive. 🌈 Even when there are tough assignments or a lot of studying to do, he is always there to help and encourage. 🤝 This makes our study sessions positive and teamwork-oriented. It doesn't just make learning easier, but it also makes studying together enjoyable. 😊",
  },
  {
    image: "/images/c3.jpg",
    name: "Armen Papikyan",
    role: "React.js Developer",
    text: "I highly recommend Jora👌 as a ReactJS developer. We studied together, and his proficiency is exceptional. He excels in creating efficient user interfaces, tackling complex challenges with creativity and technical expertise. Jora is a team player, actively contributing ideas and collaborating effectively. His positive attitude and willingness to help others make him a valuable asset. With a strong work ethic and a continuous desire for learning, he stays updated with the latest trends, ensuring his work is always cutting-edge. Jora would undoubtedly excel in any ReactJS development role.🚀",
  },

  {
    image: "/images/katy.jpg",
    name: "Katya Smbatyan",
    role: "Office Manager",
    text: "I wholeheartedly recommend Jor🤗 as an outstanding programmer with whom I've collaborated in previous business ventures. His technical expertise, strategic problem-solving, and commitment to excellence were evident throughout our projects. Jor possesses a rare combination of kindness and intelligence, fostering a positive and collaborative work environment.👌His friendly demeanor enhances team dynamics, making him not only a skilled professional but also a pleasure to work alongside. I am confident that Jor would be a valuable asset to any organization seeking a talented programmer who excels both technically and interpersonally.😉",
  },
  {
    image: "/images/c4.jpg",
    name: "Mane Karapetyan",
    role: "Graphick and UI/UX designer ",
    text: "🌟I wholeheartedly recommend Jora for his exceptional skills and teamwork as a web developer. Having studied together, I've witnessed his intelligence and dedication firsthand. Jora seamlessly integrates into teams, contributing not only technical expertise but also a collaborative spirit that enhances project outcomes.🌟 His problem-solving abilities and attention to detail are remarkable, consistently delivering high-quality solutions. Beyond his professional prowess, Jora is approachable and dependable, making him a pleasure to work with. In summary, Jora is a standout web developer who excels individually and within teams. I have full confidence in his ability to excel and make valuable contributions wherever he goes. 🌟",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000); // Change the slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <div className="relative">
      <ClientReview
        image={testimonials[current].image}
        name={testimonials[current].name}
        role={testimonials[current].role}
        text={testimonials[current].text}
      />
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default TestimonialSlider;
