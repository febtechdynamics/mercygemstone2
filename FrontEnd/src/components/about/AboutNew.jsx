import React from "react";
import img1 from "../../../public/images/emerald.webp";
import img2 from "../../../public/images/gemestone.png";
import img3 from "../../../public/images/gemestones-v.jpeg";
import img4 from "../../../public/images/afar.webp";
import { motion } from "framer-motion";

const AboutNew = () => {
  return (
    <>
      {/* about us */}
      <motion.div
        initial={{ y: "100vh" }} // Initial position outside the viewport (bottom of the screen)
        animate={{ y: 0 }} // Animation to move from bottom to top
        transition={{
          type: "spring",
          duration: 10, // Set duration to 10 seconds
          stiffness: 120,
          damping: 20,
        }}
      >
        <div class="max-w-7xl mx-auto lg:flex">
          <div class="lg:w-1/2 lg:pr-4 lg:pl-8">
            <div class="pt-1"></div>
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-600 sm:text-3xl md:text-4xl">
                  About Us
                </h2>

                <p class="text-lg">
                  MercyGem is a renowned exporter of gemstones and industrial
                  minerals in Ethiopia, specializing in the cutting and
                  processing of Wello opals. With precision and expertise, we
                  bring out the captivating beauty of these opals, ensuring they
                  shine with unparalleled brilliance. Our commitment to quality
                  and ethical practices distinguishes us as leaders in the
                  industry, delivering exquisite gems to our discerning client
                  worldwide.
                </p>
              </div>
            </main>
          </div>
          <div class="lg:w-1/2">
            <img
              class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={img4}
              alt=""
            />
          </div>
        </div>
      </motion.div>

      {/* mission */}
      <motion.div
        initial={{ x: "100vw" }} // Initial position outside the viewport (right of the screen)
        animate={{ x: 0 }} // Animation to move from right to left
        transition={{
          type: "spring",
          duration: 10,
          stiffness: 120,
          damping: 20,
        }}
      >
        <div class="max-w-7xl mx-auto lg:flex">
          <div class="lg:w-1/2">
            <img
              class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={img2}
              alt=""
            />
          </div>
          <div class="lg:w-1/2 lg:pl-4 lg:pr-8">
            <div class="pt-1"></div>
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-600 sm:text-3xl md:text-4xl">
                  Our Mission
                </h2>

                <p class="text-lg">
                  Our mission at Mercy Gem is centered around the provision of
                  superior quality gemstones and industrial minerals to our
                  esteemed customers. We are committed to ensuring their success
                  and satisfaction by offering products of exceptional value and
                  beauty. With a focus on precision and excellence, we strive to
                  exceed expectations in every facet of our operations. Our
                  dedication to craftsmanship and ethical practices underscores
                  our commitment to delivering excellence, enriching the lives
                  of our customers worldwide.
                </p>
              </div>
            </main>
          </div>
        </div>
      </motion.div>

      {/* vision */}
      <div class="max-w-7xl mx-auto lg:flex">
        <div class="lg:w-1/2 lg:pr-4 lg:pl-8">
          <div class="pt-1"></div>
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-600 sm:text-3xl md:text-4xl">
                Our Vision
              </h2>

              <p class="text-lg">
                Our aspiration at Mercy Gem is to establish ourselves as a
                foremost leader in the exportation of gemstones and industrial
                minerals. We strive to be distinguished for our commitment to
                integrity, continuous innovation, and a customer-centric ethos.
                Through our relentless pursuit of excellence, we aim to set new
                standards within the industry, earning the trust and admiration
                of our global clientele.
              </p>
            </div>
          </main>
        </div>
        <div class="lg:w-1/2">
          <img
            class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={img4}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutNew;
