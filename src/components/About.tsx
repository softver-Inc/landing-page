import React from "react";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around sm:ml-14 w-full">
      <div className=" w-11/12 sm:w-1/2 flex flex-col bg-white rounded-2xl p-3 2xl:p-8 mx-10">
        <span className="bold text-xl xl:text-2xl mb-5 text-[#fa4741]">About Us</span>
        <div className="text-sm 2xl:text-lg text-gray-700">
          Our company is dedicated to providing top-quality software solutions
          for businesses of all sizes. We have a team of experienced and skilled
          developers who are proficient in a wide range of programming languages
          and technologies. Whether you need a custom software application built
          from scratch or an existing system updated and improved, we have the
          expertise and resources to deliver results that meet your unique needs
          and goals. We pride ourselves on our ability to turn complex ideas
          into simple, intuitive solutions that drive growth and success for our
          clients. Contact us today to learn more about how we can help your
          business thrive in the digital age.
        </div>
      </div>
      <div className="hidden sm:block sm:w-[35em]">
        <img
          src="/about-image.png"
          className="w-full "
          alt="illustration"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
