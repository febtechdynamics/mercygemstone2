import img2 from "../../../public/images/gemestone.png";
import img4 from "../../../public/images/afar.webp";
import gemestoneFour from "../../../public/images/emerald.webp";
import gemstoneOne from "../../../public/images/gemestone.png";
import gemstoneTwo from "../../../public/images/gemestones-v.jpeg";
import gemestoneThree from "../../../public/images/opal2.png";

const Features = ({ products }) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-800">
          Our Core Features
        </h2>
        <p className="mt-3 text-gray-800 dark:text-gray-700">
          Embark on a journey to discover the allure and authenticity of
          Ethiopian gemstones.
        </p>
      </div>

      <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
        <div className="col-span-6 sm:col-span-4 text-center">
          <svg
            className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>

          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-700">
              Authentic Origin
            </h3>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-4 text-center">
          <svg
            className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7h-9" />
            <path d="M14 17H5" />
            <circle cx="17" cy="17" r="3" />
            <circle cx="7" cy="7" r="3" />
          </svg>
          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-700">
              Vibrant Variety
            </h3>
          </div>
        </div>

        <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
          <svg
            className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-700"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>

          <div className="mt-2 sm:mt-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-700">
              Customer Satisfaction
            </h3>
          </div>
        </div>
      </div>
      {/* images */}
      <div className="mt-20 grid grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-4 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
        <div className="flex justify-center">
          <img
            className="rounded-xl  "
            src={gemestoneFour}
            style={{
              height: "195px",
              width: "300px",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="flex justify-center">
          <img
            className="rounded-xl"
            style={{
              height: "195px",
              width: "300px",
              objectFit: "cover",
            }}
            src={gemstoneOne}
          />
        </div>

        <div className="flex justify-center">
          <img
            className="rounded-xl "
            src={gemstoneTwo}
            style={{
              height: "195px",
              width: "300px",
              objectFit: "cover",
            }}
            alt="Image Description"
          />
        </div>

        <div className="flex justify-center">
          <img
            className="rounded-xl"
            src={gemestoneThree}
            style={{
              height: "195px",
              width: "300px",
              objectFit: "cover",
            }}
            alt="Image Description"
          />
        </div>
      </div>
      {/* other descriptive */}
      <section className="mt-28">
        <div className="grid gap-14 md:grid-cols-3 md:gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-green-400 shadow-lg shadow-green-500/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
              Commitment to Quality
            </h1>
            <p className="px-4 text-gray-500">
              At Mercy Gem, quality is our top priority. We meticulously source
              and handpick each gemstone and mineral, ensuring that you receive
              only the finest products. Our dedication to quality is evident in
              every aspect of our business, from the sourcing process to our
              rigorous quality control procedures.
            </p>
          </div>
          <div
            data-aos-delay="150"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-yellow-500 shadow-yellow-500/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">
              Extensive Selection
            </h1>
            <p className="px-4 text-gray-500">
              We offer a diverse range of gemstones, minerals, and industrial
              minerals to cater to a wide range of preferences and needs. From
              Ethiopian Opals and rough emeralds to Wello Opals and Shaking
              Emeralds, our collection showcases the richness and beauty of
              nature's treasures.
            </p>
          </div>
          <div
            data-aos-delay="300"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">
              Ethiopian Opals
            </h1>
            <p className="px-4 text-gray-500">
              We specialize in Ethiopian Opals, known for their mesmerizing play
              of colors and exceptional quality. With our direct access to
              Ethiopian mines, we bring you opals that are truly unique and
              captivating. Experience the enchantment of Ethiopian Opals with
              Mercy Gem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
