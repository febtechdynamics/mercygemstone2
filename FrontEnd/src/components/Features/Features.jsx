import React from "react";
import img1 from "../../../public/images/emerald.webp";
import img2 from "../../../public/images/gemestone.png";
import img3 from "../../../public/images/gemestones-v.jpeg";
import img4 from "../../../public/images/afar.webp";

const Features = ({ products }) => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-800">
          Our Core Features
        </h2>
        <p class="mt-3 text-gray-800 dark:text-gray-700">
          Embark on a journey to discover the allure and authenticity of
          Ethiopian gemstones.
        </p>
      </div>

      <div class="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
        <div class="col-span-6 sm:col-span-4 text-center">
          <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>

          {/* <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="10" height="14" x="3" y="8" rx="2" />
            <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
            <path d="M8 18h.01" />
          </svg> */}
          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-700">
              Authentic Origin
            </h3>
          </div>
        </div>

        <div class="col-span-6 sm:col-span-4 text-center">
          <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 7h-9" />
            <path d="M14 17H5" />
            <circle cx="17" cy="17" r="3" />
            <circle cx="7" cy="7" r="3" />
          </svg>
          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-700">
              Vibrant Variety
            </h3>
          </div>
        </div>

        <div class="col-span-6 col-start-4 sm:col-span-4 text-center">
          <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-700"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>

          {/* <svg
            class="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg> */}

          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-700">
              Customer Satisfaction
            </h3>
          </div>
        </div>
      </div>

      <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img class="rounded-xl" src={img4} />
        </div>

        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={img2} />
        </div>

        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={img4} alt="Image Description" />
        </div>

        <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src={img2} alt="Image Description" />
        </div>
      </div>
    </div>
  );
};

export default Features;
