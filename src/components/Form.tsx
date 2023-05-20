"use client";
import React from "react";

import { useState } from "react";
import About from "./About";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="bg-white p-16 rounded z-50 flex flex-col sm:flex-row my-50">
      <About />
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border-2 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-semibold">
            Company
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" bg-gray-50 border-2 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border-2 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="message" className="text-sm font-semibold">
            Tell us about you project
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-50 border-2 rounded-md py-2 px-4 w-full h-40 focus:outline-none focus:ring-blue-500"
          ></textarea>
        </div>
        {/* <div className="mb-4 flex flex-col justify-center w-full text-sm">
          <label htmlFor="name" className="text-base font-semibold">
            Budget USD
          </label>

          <div className="flex flex-col">
            <div>
              <input
                type="radio"
                id="less-than-5k"
                name="budget"
                value="less-than-5k"
                className="mr-2"
              />
              <label htmlFor="less-than-5k">Less than 5k</label>
            </div>
            <div>
              <input
                type="radio"
                id="5-10k"
                name="budget"
                className="mr-2"
                value="5-10k"
              />
              <label htmlFor="5-10k">5-10k</label>
            </div>
            <div>
              <input
                type="radio"
                id="10-20k"
                name="budget"
                className="mr-2"
                value="10-20k"
              />
              <label htmlFor="10-20k">10-20k</label>
            </div>
            <div>
              <input
                type="radio"
                id="to-be-determined"
                name="budget"
                value="to-be-determined"
                className="mr-2"
              />
              <label htmlFor="to-be-determined">To be determined</label>
            </div>
          </div>
        </div> */}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
        >
          Contact now
        </button>
      </form>
    </div>
  );
};

export default Form;
