import React from "react";

interface serviceCard {
  img: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<serviceCard> = ({ img, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-[#fa4741]">{title}</h3>
        <p className="mb-6">{description}</p>
      </div>
      <img
        src={img}
        className="w-full h-auto ml-auto mb-5"
        alt="illustration"
        loading="lazy"
        width="900"
        height="600"
      />
    </div>
  );
};

export default ServiceCard;
