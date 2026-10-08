import { FaFacebook, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div name= "Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">

          {/* Left Section */}
          <div className="w-full md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">

            <span>Welcome In My Feed</span>

            <h1 className="text-2xl">
              Hello, I'm a{" "}
              <ReactTyped
                className="text-red-800 font-bold"
                strings={["Developer.", "Programmer.", "Coder."]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h1>

            <p className="text-sm md:text-base leading-7 text-gray-700">
              I am a Full Stack MERN Developer with hands-on experience in
              building responsive, scalable, and user-friendly web applications
              using MongoDB, Express.js, React.js, and Node.js. I have experience
              developing RESTful APIs, implementing authentication and
              authorization, integrating third-party services such as Stripe and
              Cloudinary, and working with databases including MongoDB and
              PostgreSQL. I have built and deployed full-stack projects such as
              an e-commerce course-selling platform and a real-time chat
              application, using Git, GitHub, Vercel, and Render. I am passionate
              about writing clean, maintainable code, solving complex problems,
              learning new technologies, and building efficient end-to-end web
              solutions.
            </p>

            {/* Social Media + Technologies */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">

              {/* Social Media */}
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>

                <ul className="flex space-x-5">
                  <li>
                    <FaFacebook className="text-2xl cursor-pointer" />
                  </li>

                  <li>
                    <FaLinkedin className="text-2xl cursor-pointer" />
                  </li>

                  <li>
                    <IoLogoYoutube className="text-2xl cursor-pointer" />
                  </li>

                  <li>
                    <BsTelegram className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>

                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl cursor-pointer" />
                  <SiExpress className="text-2xl cursor-pointer" />
                  <RiReactjsLine className="text-2xl cursor-pointer" />
                  <FaNodeJs className="text-2xl cursor-pointer" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-20 order-1 md:order-2">
            <img
              src="/photo.avif"
              className="rounded-full w-[280px] h-[280px] md:w-[450px] md:h-[450px] object-cover"
              alt="Profile"
            />
          </div>

        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;

