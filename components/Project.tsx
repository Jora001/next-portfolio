import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectInfo {
  title: string;
  description: string;
  type: "image" | "video" | "link";
  src: string;
  video?: string;
  link?: string;
  additionalImages?: string[];
}

const projects: ProjectInfo[] = [
  {
    title: "IT Lumoox",
    description: "A few months ago, I had the incredible opportunity to step into the role of Front-End Technical Lead for IT-Lumox — a collaborative initiative that brought together aspiring professionals from various fields. We were all at the beginning of our journeys, united by one powerful goal — to sharpen our technical expertise and strengthen our ability to work as a team. We formed a multidisciplinary team that reflected a real-world working environment: Team Lead, Back-End Engineer – Hovhannes Khachatryan, Front-End Engineers – Jor Hovsepyan, Rima Alekyan, Project Manager, Content Writer – Gayane Harutyunyan, QA Specialist – Arpi Sargsyan, SEO Specialist – Tamara Meliqsetyan, UI/UX Designer – Sofia Gevorgyan, Graphic Designer – Mane Karapetian. For me personally, this was my first experience leading the front-end direction of a team. It challenged me, inspired me, and most importantly, helped me grow tremendously in areas like technical leadership, code reviews, team communication, and collaboration with other departments. This project wasn’t just about building something — it was about building each other.",
    type: "image",
    src: "/images/lums.png",
    additionalImages: ["/images/lum0.png", "/images/lum3.png", "/images/lum4.png", "/images/lum5.png", "/images/lum6.png", "/images/lum7.png", "/images/lum8.png"],
  },
  {
    title: "Armina Aristak website",
    description: " Freelance Project | ArminaArista.com Website Client: Armenian Choir Instructor based in Germany  Technologies: Front-end Development, Deployment Timeline: 15 days This freelance project was created for an Armenian choir instructor living in Germany who leads a vocal group and wanted to present her center professionally online. The goal was to build a clean, elegant, and informative website that represents her work and showcases the activities of the choir. I was responsible for the entire front-end development and deployment process. From the initial layout to the final live version, the project was fully completed within 15 days, including close collaboration with the client to ensure all her needs were met. This project strengthened my ability to manage tasks independently, work with international clients, and deliver high-quality results within a defined timeframe.",
    type: "image",
    src: "/images/arm111.jpg",
    additionalImages: ["/images/arm2.jpg", "/images/arm3.jpg","/images/arm4.jpg","/images/arm5.jpg","/images/arm6.jpg","/images/arm7.jpg","/images/arm8.jpg","/images/arm9.jpg"],
  },
  {
    title: "Nike Shoes Website",
    description: " Personal Project | Nike Shoes Website Clone Technologies: React.js, CSS Modules / Tailwind, Authentication (Sign Up / Login) Features: User Registration & Login Pages This is a personal project where I built a functional clone of the Nike Shoes website, focusing on clean design, responsive layout, and essential user flows. The project includes fully designed Sign Up and Login pages to simulate a real-world e-commerce experience. The goal was to deepen my understanding of front-end architecture, routing, and form handling, while also improving my skills in authentication UI/UX. The result is a sleek and interactive site that reflects both branding and functionality principles of major e-commerce platforms.",
    type: "video",
    src: "/images/z2.png",
    video: "/videos/nike.mp4",
    additionalImages: ["/images/z5-1.png", "/images/z5-2.png", "/images/z5-3.png"],
  },
  {
    title: "Black-Box Website",
    description: " Team Project | Web Platform for Black-Box | Gyumri Technology Center Technologies: React.js, TypeScript, Deployment Team Collaboration | Real Client Project | 2024 This project was developed as part of a team collaboration within the Gyumri Technology Center, specifically for the well-known Black-Box initiative. Our goal was to build a modern, user-friendly, and dynamic web platform that reflects the vision and core values of Black-Box. I was responsible for developing the Front-end of the website using React.js and TypeScript, ensuring a clean and responsive user interface. I also handled the deployment process, making the platform fully functional and accessible online. This project helped me grow both technically and professionally, while also enhancing my teamwork and communication skills by working with real client requirements.",
    type: "video",
    src: "/images/z2.png",
    video: "/videos/black.mp4",
    additionalImages: ["/images/liv-1.jpg", "/images/liv-2.jpg"],
  },
  {
    title: "Doctors Website",
    description: "Project | Medical Platform for Doctors & Patients Technologies: React.js, TypeScript, Node.js, Express.js, MySQL Features: Patient–Doctor Communication, Booking System, Doctor Profiles This is a full-stack web platform designed to connect patients and doctors in a seamless and user-friendly way. Patients can explore detailed doctor profiles, review their experience and expertise, ask medical questions directly, and even book appointments for checkups. The system was built to simulate a real-life healthcare platform with interactive and secure communication between patients and medical professionals. I developed both the Front-end and Back-end, integrating real-time features and a structured database to support dynamic user interactions. This project allowed me to dive deeper into full-stack development, improve my database design skills, and build a meaningful product that could solve real-world problems in healthcare communication.",
    type: "image",
    src: "/images/Doc1.jpg",
    additionalImages: ["/images/Doc2.jpg", "/images/Doc3.jpg", "/images/Doc4.jpg", "/images/Doc5.jpg", "/images/Doc6.jpg", "/images/Doc7.jpg", "/images/Doc8.jpg"],
  },
   {
 title: "Nike Shoes Website",
    description: " Personal Project | Nike Shoes Website Clone Technologies: React.js, CSS Modules / Tailwind, Authentication (Sign Up / Login) Features: User Registration & Login Pages This is a personal project where I built a functional clone of the Nike Shoes website, focusing on clean design, responsive layout, and essential user flows. The project includes fully designed Sign Up and Login pages to simulate a real-world e-commerce experience. The goal was to deepen my understanding of front-end architecture, routing, and form handling, while also improving my skills in authentication UI/UX. The result is a sleek and interactive site that reflects both branding and functionality principles of major e-commerce platforms.",
    type: "video",
    src: "/images/z2.png",
    video: "/videos/recording2025-11-03132611.mp4",
    additionalImages: ["/images/z5-1.png", "/images/z5-2.png", "/images/z5-3.png"],
  },
  {
    title: "Live Chat Node.js",
    description: "Full-Stack Project | Real-Time Live Chat Platform Technologies: Node.js, Express.js, Socket.io  Features: Real-Time Messaging, Online Status, Last Seen, Message History This project is a real-time chat platform developed using Node.js and Socket.io, where friends can chat instantly and maintain conversation history. Users can see who is currently online, and also view the last seen status of their contacts. All chat messages are stored securely in the database, allowing users to revisit past conversations at any time. The platform supports real-time interactions and reflects user activity dynamically. This project significantly boosted my skills in WebSockets, server-side architecture, and real-time communication, while also teaching me how to build a responsive and engaging user experience on the front end.",
    type: "image",
    src: "/images/Live.jpg",
    additionalImages: ["/images/Live1.jpg", "/images/Live2.jpg"],
  },
  // Նոր պրոեկտ
 
];

const Project = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false); 

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setCurrentImageIndex(0);
    setIsDescriptionExpanded(false);
  };

  const handleClose = () => {
    setSelectedIndex(null);
    setCurrentImageIndex(0);
    setIsDescriptionExpanded(false);
  };

  const showPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setCurrentImageIndex(0);
      setIsDescriptionExpanded(false);
    }
  };
  const showNext = () => {
    if (selectedIndex !== null && selectedIndex < projects.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setCurrentImageIndex(0);
      setIsDescriptionExpanded(false);
    }
  };
  const showPreviousImage = () => {
    if (selectedIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (
      selectedIndex !== null &&
      projects[selectedIndex].additionalImages &&
      currentImageIndex < projects[selectedIndex].additionalImages!.length
    ) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-[#02050a] to-[#1a1e2a] pt-[6rem] md:pt-[10rem] pb-[4rem] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.2),transparent)]"></div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="heading text-center text-5xl md:text-6xl font-bold text-white mb-16"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Pro
        </span>
        jects
      </motion.h1>

      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.5rem]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleImageClick(index)}
            className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
          >
            {project.type === "image" && (
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-[250px] rounded-2xl group-hover:scale-110 transition-transform duration-500"
              />
            )}

            {project.type === "video" && (
              <video
                className="w-full h-[250px] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                muted
                loop
                autoPlay
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {project.type === "link" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-[250px] rounded-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </a>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2 line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-gradient-to-br from-[#1a1e2a] to-[#02050a] p-8 rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white bg-blue-600 hover:bg-blue-700 rounded-full p-2 transition-colors duration-300"
              >
                ✕
              </button>

              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={showPrevious}
                  disabled={selectedIndex === 0}
                  className={`p-3 text-white bg-blue-600 rounded-full ${
                    selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                  } transition-colors duration-300`}
                >
                  ←
                </button>

                <div className="flex-grow mx-4">
                  {projects[selectedIndex].type === "image" && (
                    <Image
                      src={
                        currentImageIndex === 0
                          ? projects[selectedIndex].src
                          : projects[selectedIndex].additionalImages![currentImageIndex - 1]
                      }
                      alt={projects[selectedIndex].title}
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  )}
                  {projects[selectedIndex].type === "video" && (
                    <video controls width="100%" height="auto" className="rounded-xl mt-4">
                      <source src={projects[selectedIndex].video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {projects[selectedIndex].type === "link" && (
                    <>
                      <Image
                        src={
                          currentImageIndex === 0
                            ? projects[selectedIndex].src
                            : projects[selectedIndex].additionalImages![currentImageIndex - 1]
                        }
                        alt={projects[selectedIndex].title}
                        width={600}
                        height={400}
                        className="rounded-xl w-full h-auto"
                      />
                      <a
                        href={projects[selectedIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-400 hover:text-blue-300 underline mt-4 text-center"
                      >
                        Visit Project Link
                      </a>
                    </>
                  )}

                  {(projects[selectedIndex].type === "image" ||
                    projects[selectedIndex].type === "link") && (
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={showPreviousImage}
                        disabled={currentImageIndex === 0}
                        className={`p-2 text-white bg-blue-600 rounded-full ${
                          currentImageIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                        } transition-colors duration-300`}
                      >
                        ← Prev Image
                      </button>
                      <button
                        onClick={showNextImage}
                        disabled={
                          !projects[selectedIndex].additionalImages ||
                          currentImageIndex >= projects[selectedIndex].additionalImages!.length
                        }
                        className={`p-2 text-white bg-blue-600 rounded-full ${
                          !projects[selectedIndex].additionalImages ||
                          currentImageIndex >= projects[selectedIndex].additionalImages!.length
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-blue-700"
                        } transition-colors duration-300`}
                      >
                        Next Image →
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={showNext}
                  disabled={selectedIndex === projects.length - 1}
                  className={`p-3 text-white bg-blue-600 rounded-full ${
                    selectedIndex === projects.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                  } transition-colors duration-300`}
                >
                  →
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">{projects[selectedIndex].title}</h2>
              <div className="text-gray-300 leading-relaxed">
                <p
                  className={`transition-all duration-300 ${
                    isDescriptionExpanded ? "" : "line-clamp-4"
                  }`}
                >
                  {projects[selectedIndex].description}
                </p>
                {projects[selectedIndex].description.length > 200 && (
                  <button
                    onClick={toggleDescription}
                    className="mt-2 text-blue-400 hover:text-blue-300 underline focus:outline-none"
                  >
                    {isDescriptionExpanded ? "Show Less" : "See All"}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
