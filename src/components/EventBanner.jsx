import React from "react";
import Banner from "../Images/banner.jpg";

const EventBanner = () => {
  return (
    <div className="relative">
      <img
        src={Banner}
        alt="Event banner"
        className="w-full h-auto rounded-4xl"
      />
      <div className="absolute bottom-10 left-0 right-0 text-center mb-10">
        <a
          href=""
          className="inline-block px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          style={{ fontSize: "1.5rem" }}
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default EventBanner;
