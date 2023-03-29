import React from "react";
import p1 from "../Images/1.png";
import p2 from "../Images/2.png";
import p3 from "../Images/3.png";
import p4 from "../Images/4.png";

const WorkingGroups = () => {
  return (
    <>
      <div class="container flex justify-center mx-auto ">
        <div>
          <h2 class="xl:text-4xl text-2xl text-gray-500 dark:text-gray-200 font-extrabold text-center pb-3">
            Working Group Sub Themes
          </h2>
        </div>
      </div>
      <div class="w-full dark:bg-gray-800 px-10 pt-2">
        <div class="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            <div
              role="listitem"
              class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 p-2"
            >
              <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div class=" w-full flex justify-center">
                  <div class="h-1/2 w-full">
                    <img
                      src={p1}
                      alt="Display Picture of Dean Jones"
                      role="img"
                      class=" object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-8">
                  <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                    Technology For Empowerment
                  </p>
                  <div class="w-full flex justify-center pt-5 pb-5">
                    <button class="text-black hover:text-gray-400 font-bold py-2 px-4 rounded">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 p-2"
            >
              <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div class=" w-full flex justify-center">
                  <div class="h-1/2 w-full">
                    <img
                      src={p2}
                      alt="Display Picture of Dean Jones"
                      role="img"
                      class=" object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-8">
                  <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                    Artificial Intelligence And Data For Society
                  </p>
                  <div class="w-full flex justify-center pt-5 pb-5">
                    <button class="text-black hover:text-gray-400 font-bold py-2 px-4 rounded">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 p-2"
            >
              <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div class=" w-full flex justify-center">
                  <div class="h-1/2 w-full">
                    <img
                      src={p3}
                      alt="Display Picture of Dean Jones"
                      role="img"
                      class=" object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-8">
                  <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                    Transparency, Trust & Disinformation
                  </p>
                  <div class="w-full flex justify-center pt-5 pb-5">
                    <button class="text-black hover:text-gray-400 font-bold py-2 px-4 rounded">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 p-2"
            >
              <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                <div class=" w-full flex justify-center">
                  <div class="h-1/2 w-full">
                    <img
                      src={p4}
                      alt="Display Picture of Dean Jones"
                      role="img"
                      class=" object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div class="px-6 mt-8">
                  <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                    Security, Safety And Resilence
                  </p>
                  <div class="w-full flex justify-center pt-5 pb-5">
                    <button class="text-black hover:text-gray-400 font-bold py-2 px-4 rounded">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingGroups;
