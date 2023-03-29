import React from "react";

const EventDetails = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-8 px-4 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          Event Details
        </h1>
        <div className="flex justify-center mx-auto w-3/4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <div className="flex justify-center w-full">
              <div className="bg-white p-4 rounded-md shadow-lg w-full">
                <div className="text-gray-800 font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="h-4 w-4"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  Location:
                </div>
                <div className="text-gray-800">
                  Coimbatore Amrita Vishwa Vidyapeethom Ettimadai Coimbatore, TN
                  641 112
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="bg-white p-4 rounded-md shadow-lg w-full">
                <div className="text-gray-800 font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-4 w-4 "
                  >
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                  </svg>
                  Date and Time:
                </div>
                <div className="text-gray-800">
                  May 13 · 9am - May 14 · 5pm IST
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg lg:text-xl text-gray-500">
          <p className="mb-4">
            Technology and Security for One World grants each person the
            opportunity to work directly with experts in their field, as we look
            to improve the technology and digital space towards inclusivity,
            affordability and accessibility. These discussions will prove vital
            to drafting well-rounded policy recommendations submitted to the
            Civil 20. The two days will consist of keynotes, panel discussions,
            breakout groups, cultural programs and excursions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
