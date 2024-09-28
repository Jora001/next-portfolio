import React, { useState } from "react";
import Image from "next/image";

interface ImageInfo {
  src: string;
  desc: string;
  video?: string; // Optional video property
}

const images: ImageInfo[] = [
  {
    src: "/images/z6.png",
    desc: "I’m excited to share my latest project with you—a personal Medial website that I’ve developed entirely on my own.",
    video: "",
  },
  {
    src: "/images/z3.png",
    desc: "Description for image 2",
    video: "",
  },
  {
    src: "/images/z4.png",
    desc: "Description for image 3",
    video: "",
  },
  {
    src: "/images/z2.png",
    desc: "Black-Box website,  we worked as a team, we used TypeScript, React.js and UI/UX design.",
    video: "/videos/black.mp4",
  },
  {
    src: "/images/z5.png",
    desc: "Nike shoes website",
    video: "/videos/nike.mp4",
  },
  {
    src: "/images/liv.jpg",
    desc: "NodeJS Realtime Chat I used Node.js, Express.js, React.js(vite), TypeScript, and Axios",
    video: "",
  },
];

const Project = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div id="project" className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro<span className="text-blue-400">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]"
          >
            <Image
              src={image.src}
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded shadow-lg w-[80%] md:w-[60%] lg:w-[40%]">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
              style={{ zIndex: 1000 }}
            >
              X
            </button>
            <div className="flex items-center justify-between">
              <button
                onClick={showPrevious}
                disabled={selectedIndex === 0}
                className={`p-2 ${
                  selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                &lt;
              </button>
              <div className="mb-4">
                <Image
                  src={images[selectedIndex].src}
                  alt="selected"
                  width={600}
                  height={400}
                />
              </div>
              <button
                onClick={showNext}
                disabled={selectedIndex === images.length - 1}
                className={`p-2 ${
                  selectedIndex === images.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                &gt;
              </button>
            </div>
            <p>{images[selectedIndex].desc}</p>
            {images[selectedIndex].video && (
              <video controls width="300" height="200">
                <source src={images[selectedIndex].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
