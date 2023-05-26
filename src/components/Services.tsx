import React from "react";
import ServiceCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="py-16 bg-[#2196f3] px-5 rounded sm:screen">
      <div className="flex items-center justify-center mb-5">
        <span className="text-white text-5xl">Services</span>
      </div>
      <div className="container mx-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div className="mx-auto grid gap-12 md:w-3/5 lg:w-full lg:grid-cols-1 xl:grid-cols-3">
          <ServiceCard
            img="/develop.jpg"
            title="Software Development"
            description="We specialize in custom software development to meet the unique needs of our clients. We provide tailored and customized solutions that are specifically designed to match your specific requirements, offering an individualized approach and meticulous attention to every project."
          />
          <ServiceCard
            img="/ux.jpg"
            title="UI/UX Design"
            description="Delivering exceptional UI & UX services with tailored solutions for your needs. Our personalized approach ensures meticulous attention to detail, resulting in optimal user experiences that exceed expectations. Trust us to transform your digital presence into something extraordinary."
          />
          <ServiceCard
            img="/hardware.png"
            title="Electronic Design"
            description="Transform your electronic concepts into reality with our expert team. We specialize in electronic design, bringing innovation and functionality to your hardware projects. Let us bring your ideas to life!"
          />
          <ServiceCard
            img="/hardware.png"
            title="Hardware Development"
            description="Transform your electronic concepts into reality with our expert team. We specialize in electronic design, bringing innovation and functionality to your hardware projects. Let us bring your ideas to life!"
          />
          <ServiceCard
            img="/3d.jpg"
            title="3D Printing"
            description="Materialize your designs with our 3D printing services. Prototypes, customized parts, and complex components become tangible. Accelerate your production!"
          />
          <ServiceCard
            img="/automation.png"
            title="Automation"
            description="Optimize your operations with our customized solutions. We integrate intelligent systems and tailor-made software to enhance your efficiency. Automate and stand out!"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
