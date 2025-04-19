import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/images/cc1.jpg",
    name: "Hovhannes Khachatryan",
    role: "Software Engineer | Team Lead |  Tech Speaker  | Passionate About Solving Complex Problems",
    text: "I wholeheartedly recommend Jor for their purposeful, active, and clever mindset. Their dedication and intelligence make them an invaluable addition to any team or project. 🌟",
  },
  {
    image: "/images/c2.jpg",
    name: "Elmira Papoyan",
    role: "Front end Web Developer",
    text: "During our time studying together, Jora consistently showed a strong commitment to doing well in our studies. 📚 He works really hard and never gives up, making him a great study partner. 🚀 Jora is excellent at understanding difficult ideas quickly, which helps us study more efficiently. Not only is Jora a hard worker, but he is also very kind and supportive. 🌈 Even when there are tough assignments or a lot of studying to do, he is always there to help and encourage. 🤝 This makes our study sessions positive and teamwork-oriented. It doesn't just make learning easier, but it also makes studying together enjoyable. 😊",
  },
  {
    image: "/images/cc88.jpg",
    name: "Arman Haroyan",
    role: "Full-Stack Developer | JS, React, Node, TypeScript | Data Analytics (SAS, R, SPSS) | GIS Data Visualization Professional | Data collection specialist | Researcher",
    text: "It is my pleasure to share my experience working with Jora, whom I first met at 42Yerevan, where we started studying together. From day one, Jora stood out with his dedication, perseverance, and eagerness to learn continuously. We often practiced together, solving programming challenges and exercises, during which I noticed his exceptional analytical thinking and teamwork skills. Jora is not only technically skilled but also highly adaptable and creative in approaching problems. Throughout our joint practice, he actively developed his own skills while also supporting me and others by sharing knowledge and insights. His constant motivation and collaborative spirit make Jora an excellent team member and a strong asset for any future endeavors. I highly recommend Jora to anyone seeking a committed and intelligent professional.",
  },
  {
    image: "/images/c5.png",
    name: "Lilit Poghosyan",
    role: "Software Engineer | Front-End Development: TypeScript, Angular | Back-End Development: Java, Spring Boot, REST APIs | Database Management: MySQL, PostgreSQL",
    text: "I am pleased to write this recommendation for Jora, who I have had the privilege of working with at our education center. Jora is an exceptionally intelligent individual with a remarkable ability to adapt to new technologies and embrace challenges with enthusiasm. What truly sets Jora apart is his flexibility and eagerness to learn. He consistently approaches new problems with a positive attitude and quickly masters new tools and techniques. His knack for coming up with smart, effective solutions to complex issues has impressed everyone who has worked with him.",
  },

  {
    image: "/images/miashhhh.jpg",
    name: "Misha Papoyan",
    role: "Front-end Developer | React, Next.js, Vue.js | Rust Enthusiast Bringing System-Level Thinking to Web Development",
    text: "I had the pleasure of working with Jora on several projects, and I can confidently say that he is an exceptional front-end developer, particularly skilled with Next.js. His technical expertise in building scalable, performant web applications is impressive, and his ability to seamlessly integrate dynamic user experiences into projects always adds significant value. Jora has a deep understanding of modern web development technologies, and his code is consistently clean, well-structured, and maintainable.   Beyond his technical skills, Jora is a fantastic teammate. He communicates effectively, collaborates effortlessly, and always approaches challenges with a positive attitude. Jora is someone who genuinely cares about the success of the team, and he's always willing to go the extra mile to ensure that projects are completed to the highest standard. His strong work ethic, coupled with his attention to detail, make him a reliable and indispensable part of any team. In addition to his professionalism, Jora brings a great sense of empathy and patience to the table, always ready to help others and contribute to a harmonious working environment. I'm confident that Jora will continue to excel and bring great value to any future team he joins.",
  },
  {
    image: "/images/Arpi.jpg",
    name: "Arpi Sargsyan",
    role: "NTL QA Enginer",
    text: "I had the pleasure of working with Jora on a recent project, and I cannot speak highly enough of their skills and professionalism. As a Software developer, Jora demonstrated exceptional proficiency in both front-end and back-end technologies, making significant contributions to the success of our project",
  },
  {
    image: "/images/c3.jpg",
    name: "Armen Papikyan",
    role: "React.js Developer",
    text: "I highly recommend Jora👌 as a ReactJS developer. We studied together, and his proficiency is exceptional. He excels in creating efficient user interfaces, tackling complex challenges with creativity and technical expertise. Jora is a team player, actively contributing ideas and collaborating effectively. His positive attitude and willingness to help others make him a valuable asset.",
  },
  {
    image: "/images/katy.jpg",
    name: "Katya Smbatyan",
    role: "Experienced Communications Specialist  Crafting Impactful Messages  Driving Brand Success",
    text: "I wholeheartedly recommend Jor🤗 as an outstanding programmer with whom I've collaborated in previous business ventures. His technical expertise, strategic problem-solving, and commitment to excellence were evident throughout our projects. Jor possesses a rare combination of kindness and intelligence, fostering a positive and collaborative work environment.👌 His friendly demeanor enhances team dynamics, making him not only a skilled professional but also a pleasure to work alongside.",
  },

  {
    image: "/images/nare.jpg",
    name: "Nare Tonoyan",
    role: "Multilingual Educator & Language Specialist | English, French, Russian, Italian, Greek, Turkish | Arabist & Francian INALCO Master's Student in Eastern Languages & Cultures",
    text: "It is effective to contact Zhora because he is both a good person and has rich and high professional knowledge. Thank you Zhora jan!",
  },

  {
    image: "/images/armenuhi.jpg",
    name: "Armenuhi Toroyan",
    role: "Software Engineer | Building Scalable Solutions with Modern Technologies | Passionate About Problem-Solving & Innovation",
    text: "Jora and I are working and learning together on a team project. He already has software development background. I can say that Jora is a dedicated and hardworking developer with structured and attentive approach to work.",
  },

  {
    image: "/images/sara.jpg",
    name: "Sara Andreasyan",
    role: "Dedicated Human Resources Specialist | Expert in Talent Acquisition, Employee Engagement, and Organizational Development",
    text: "🌟I wholeheartedly recommend Jora for his exceptional skills and teamwork as a web developer. Having studied together, I've witnessed his intelligence and dedication firsthand. Jora seamlessly integrates into teams, contributing not only technical expertise but also a collaborative spirit that enhances project outcomes.🌟 His problem-solving abilities and attention to detail are remarkable, consistently delivering high-quality solutions. Beyond his professional prowess, Jora is approachable and dependable, making him a pleasure to work with.",
  },
];

const MAX_LENGTH = 300;

interface ClientReviewProps {
  image: string;
  name: string;
  role: string;
  text: string;
}

const ClientReview: React.FC<ClientReviewProps> = ({
  image,
  name,
  role,
  text,
}) => {
  const [showMore, setShowMore] = useState(false);

  const isLongText = text.length > MAX_LENGTH;
  const displayedText = showMore ? text : text.slice(0, MAX_LENGTH);

  return (
    <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl shadow-md">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-gray-200"
      />
      {/* 5 stars */}
      <div className="flex justify-center mb-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <span key={index} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
      </div>

      <h3 className="text-2xl font-semibold text-gray-200">{name}</h3>
      <p className="text-sm text-gray-200 mb-4">{role}</p>
      <p className="text-gray-200 min-h-[180px]">
        {displayedText}
        {isLongText && !showMore && "..."}
      </p>
      {isLongText && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-3 text-blue-600 font-medium hover:underline transition"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);

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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default TestimonialSlider;
