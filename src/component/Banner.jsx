import { TypeAnimation } from "react-type-animation";
import { MdNearMe } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="mx-w-screen-2xl min-h-[600px] mt-4  mx-auto lg:p-5 p-2">
      <div className="flex justify-evenly gap-10 flex-col-reverse md:flex-row  items-center ">
        <div className="flex gap-4 md:gap-20  ">
            <div className="flex flex-col gap-y-10">
                 <a href="https://www.facebook.com/profile.php?id=100031068829811"><FaFacebook className="text-xl text-sky-500" /></a>
                 <a href="https://www.linkedin.com/in/mazharul-islam-49ab98256/"><FaLinkedin className="text-xl text-sky-500" /></a>
                 <a href="https://github.com/mazharulislam-12"><FaGithub  className="text-xl text-sky-500" /></a>
            </div>
          <div className="font-poppins">
            <h1 className="text-4xl text-white  mb-3">Hi, I'm Mazharul</h1>

            <TypeAnimation
              className="text-sky-500 font-poppins text-sm  mb-2 mt-1"
              sequence={[
                "Front End Developer",
                1000,
                "Learn Mern Stack",
                1000,
                "",
                
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

            <p className="font-light mt-3 text-gray-400">
              I'm creative frontend developer, and I'm <br /> very passionate dedicated
              to my work
            </p>
          </div>
        </div>
        <div className=" md:mt-12 ">
          <img className="home_img w-[400px] rounded-tl-3xl border-opacity-20 shadow-2xl border-8 border-sky-500" src="./img/banner.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
