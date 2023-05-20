import React from "react";

const Services = () => {
  return (
    <div className="py-16 bg-[#2196f3] px-5 rounded sm:screen">
      <div className="flex items-center justify-center mb-5">
        <span className="text-white text-5xl">Services</span>
      </div>
      <div className="container mx-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-1 xl:grid-cols-3">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-[#2196f3]">
                Software Development
              </h3>
              <p className="mb-6">
                We specialize in custom software development to meet the unique
                needs of our clients. We provide tailored and customized
                solutions that are specifically designed to match your specific
                requirements, offering an individualized approach and meticulous
                attention to every project.
              </p>
              <a href="#" className="block font-medium text-[#2152f3]">
                Know more
              </a>
            </div>
            <img
              src="/develop.jpg"
              className="w-full h-auto ml-auto -mb-12"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
            <div className="flex w-full justify-end text-gray-700 items-end  text-xs">
              Image by{" "}
              <a href="https://www.freepik.com/free-vector/hand-drawn-web-developers_12063795.htm#page=2&query=software%20development&position=28&from_view=search&track=ais">
                Freepik
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mt-8 xl:mt-0">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-[#2196f3]">
                UI Design
              </h3>
              <p className="mb-6">
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
              <a href="#" className="block font-medium text-[#2152f3]">
                Know more
              </a>
            </div>
            <img
              src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
              className="w-full h-auto ml-auto"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 mt-8 xl:mt-0">
            <div className="mb-12 space-y-4">
              <h3 className="text-2xl font-semibold text-[#2196f3]">
                UX Design
              </h3>
              <p className="mb-6">
                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                cum, consectetur ullam tempora ipsa iste officia sed officiis!
                Incidunt ea animi officiis.
              </p>
              <a href="#" className="block font-medium text-[#2152f3]">
                Know more
              </a>
            </div>
            <img
              src="/ux.jpg"
              className="w-full h-auto ml-auto"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
