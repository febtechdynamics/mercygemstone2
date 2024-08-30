const ProductInfo = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-800 sm:text-4xl">
            Discover Our Products
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
        >
          <li className="rounded-2xl border border-gray-200 p-8">
            <h3 className="font-bold text-lg text-gray-900 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                {/* <svg
                  aria-hidden="true"
                  viewBox="0 0 1024 1024"
                  className="w-[26px] mr-2 fill-[#061161]"
                  preserveAspectRatio="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M725.264 393.76a36.832 36.832 0 0 0-31.728-18.112H580.704l130.768-210.416a36.816 36.816 0 0 0-31.28-56.288H403.936a36.832 36.832 0 0 0-36.208 30.032L294.08 530.192a36.832 36.832 0 0 0 36.208 43.648h104.864l-35.2 299.728a36.832 36.832 0 0 0 68.832 22.112l257.008-465.392a36.8 36.8 0 0 0-0.512-36.528z"
                  ></path>
                </svg> */}
              </span>
              Ethiopian Opals
            </h3>
            <p className="mt-6 text-base text-gray-700">
              Experience the mesmerizing beauty of Ethiopian Opals, renowned for
              their captivating play of colors and exceptional quality. Sourced
              directly from the rich mines of Ethiopia, these opals showcase
              nature's artistry in every stone. When you choose our Ethiopian
              Opals, you can expect a wide range of colors, including vibrant
              oranges, fiery reds, deep blues, and ethereal greens. The play of
              colors, known as "opalescence," creates a captivating effect as
              light dances across the surface of the opal. Each opal is
              carefully selected for its brilliance, clarity, and unique
              patterns, making it a truly remarkable gemstone for jewelry and
              collectors alike.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <h3 className="font-bold text-lg text-gray-900 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                {/* <svg
                  aria-hidden="true"
                  viewBox="0 0 1024 1024"
                  className="w-[26px] mr-2 fill-[#061161]"
                  preserveAspectRatio="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M213.333333 469.333333h170.666667c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v170.666667c0 46.933333 38.4 85.333333 85.333333 85.333333zM853.333333 597.333333h-170.666666c-46.933333 0-85.333333 38.4-85.333334 85.333334v170.666666c0 46.933333 38.4 85.333333 85.333334 85.333334h170.666666c46.933333 0 85.333333-38.4 85.333334-85.333334v-170.666666c0-46.933333-38.4-85.333333-85.333334-85.333334zM964.266667 439.466667l-179.2-320c-8.533333-12.8-29.866667-12.8-38.4 0l-174.933334 320c-8.533333 12.8 4.266667 29.866667 17.066667 29.866666h354.133333c17.066667 0 29.866667-17.066667 21.333334-29.866666zM298.666667 554.666667c-119.466667 0-213.333333 98.133333-213.333334 213.333333 0 119.466667 98.133333 213.333333 213.333334 213.333333 119.466667 0 213.333333-98.133333 213.333333-213.333333 0-119.466667-98.133333-213.333333-213.333333-213.333333z"
                  ></path>
                </svg> */}
              </span>
              Polished Opal
            </h3>
            <p className="mt-6 text-base text-gray-700">
              Our collection of polished opals features stones that have
              undergone a meticulous process to enhance their natural beauty.
              Skilled artisans carefully shape and polish the opals, revealing
              their vibrant colors and captivating patterns. The polishing
              process highlights the opalescence and brings out the inner glow
              of each stone. From cabochons to faceted cuts, our polished opals
              are perfect for creating stunning jewelry pieces, such as opal
              rings, pendants, earrings, and bracelets. Whether you prefer a
              single opal as a centerpiece or a collection of opals in a mosaic
              design, our polished opals offer endless possibilities for unique
              and eye-catching jewelry creations.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <h3 className="font-bold text-lg text-gray-900 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                {/* <svg
                  aria-hidden="true"
                  viewBox="0 0 1024 1024"
                  className="w-[26px] mr-2 fill-[#061161]"
                  preserveAspectRatio="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M638.72 95.573333l289.706667 289.706667a179.2 179.2 0 0 1 0 253.44l-289.706667 289.706667a179.2 179.2 0 0 1-253.44 0l-289.706667-289.706667a179.2 179.2 0 0 1 0-253.44l289.706667-289.706667a179.2 179.2 0 0 1 253.44 0z m27.050667 372.48c26.453333 0 47.914667-21.12 47.914666-47.274666 0-26.154667-21.461333-47.36-47.914666-47.36a47.573333 47.573333 0 0 0-46.848 56.96l-30.890667 14.506666a68.394667 68.394667 0 0 0-54.869333-27.392l-2.005334 0.128-11.690666-34.218666c22.784-12.757333 38.229333-36.949333 38.229333-64.725334 0-41.088-33.706667-74.410667-75.264-74.410666-41.514667 0-75.221333 33.28-75.221333 74.410666 0 41.045333 33.706667 74.368 75.221333 74.368 2.048 0 3.925333-0.170667 5.930667-0.298666l11.477333 33.365333c-20.949333 11.605333-35.114667 33.664-35.114667 59.008 0 5.717333 0.768 11.136 2.133334 16.426667l-32.853334 15.36a85.546667 85.546667 0 0 0-70.656-36.949334 85.034667 85.034667 0 0 0-85.546666 84.48c0 46.677333 38.314667 84.48 85.546666 84.48 47.189333 0 85.504-37.802667 85.504-84.48 0-5.333333-0.554667-10.496-1.536-15.488l36.48-17.066666a68.48 68.48 0 0 0 59.306667 20.053333l23.722667 69.12c-20.48 11.648-34.304 33.493333-34.304 58.581333 0 37.333333 30.592 67.541333 68.352 67.541334 37.802667 0 68.394667-30.208 68.394666-67.541334 0-37.376-30.592-67.626667-68.394666-67.626666-0.896 0-1.877333 0.085333-2.816 0.170666l-24.874667-72.362666a67.285333 67.285333 0 0 0 27.776-62.805334l37.418667-17.493333c7.765333 5.376 17.237333 8.533333 27.392 8.533333z"
                  ></path>
                </svg> */}
              </span>
              Rough Emerald
            </h3>
            <p className="mt-6 text-base text-gray-700">
              Immerse yourself in the raw beauty of rough emeralds sourced from
              reputable mines. These uncut emeralds retain their natural form,
              showcasing the unique character and allure of this precious
              gemstone. Each rough emerald possesses its own distinct shape,
              color variations, and inclusions. Rough emeralds provide gem
              enthusiasts, lapidaries, and jewelry designers with the
              opportunity to create one-of-a-kind pieces. Whether you prefer the
              rugged and organic look of a rough emerald as a pendant or wish to
              incorporate it into a custom-designed jewelry setting, these raw
              gemstones offer a unique and natural charm.
            </p>
          </li>
          <li className="rounded-2xl border border-gray-200 p-8">
            <h3 className="font-bold text-lg text-gray-900 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>

                {/* <svg
                  aria-hidden="true"
                  viewBox="0 0 1024 1024"
                  className="w-[26px] mr-2 fill-[#061161]"
                  preserveAspectRatio="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M818.3 442a4 4 0 0 1-2.8-3.5C806.5 297.7 689 186 545.9 186c-113.2 0-214.5 72.1-253.3 175.8a4.1 4.1 0 0 1-3.6 2.6C163.9 370.8 64 474.5 64 601c0 130.7 106.4 237 237.3 237h455.8C869 838 960 747.1 960 635.3A202.5 202.5 0 0 0 818.3 442zM639.2 581.5L518.6 765.8a4 4 0 0 1-6.7 0L391.3 581.5a4 4 0 0 1 3.4-6.2h80.6a4 4 0 0 0 4-4V388a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4v183.3a4 4 0 0 0 4 4h80.6a4 4 0 0 1 3.3 6.2z"
                  ></path>
                </svg> */}
              </span>
              Rough Emerald Specimen
            </h3>
            <p className="mt-6 text-base text-gray-700">
              For collectors and gemstone enthusiasts, we offer rough emerald
              specimens that showcase the raw beauty and uniqueness of emeralds.
              These specimens capture the essence of emeralds in their uncut and
              natural state. Each rough emerald specimen exhibits fascinating
              color variations, crystal formations, and intricate inclusions
              that make them truly captivating. Whether displayed as part of a
              mineral collection or used as decorative pieces, rough emerald
              specimens are a testament to the wonders of nature's geological
              processes and an excellent addition to any gemstone enthusiast's
              collection.
            </p>
          </li>
          {/* <li className="rounded-2xl border border-gray-200 p-8">
            <h3 className="font-bold text-lg text-gray-900 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </span>
              Rough Blue Sapphire
            </h3>
            <p className="mt-6 text-base text-gray-700">
              Delve into the world of rough blue sapphires, known for their deep
              blue hue that symbolizes wisdom, nobility, and truth. These uncut
              gemstones showcase the raw beauty of sapphires in their natural
              form. Rough blue sapphires offer a glimpse into the geological
              forces that shape these precious gems, with their characteristic
              crystal formations and variations in color intensity. Whether
              you're a collector looking for a unique addition to your gemstone
              collection or a jeweler seeking to create a bespoke piece, rough
              blue sapphires provide an opportunity to appreciate the inherent
              beauty of sapphires in their raw and unprocessed state.
            </p>
            <p className="mt-6 text-base text-gray-700">
              At Mercy Gem, we take pride in offering a diverse range of
              top-quality gemstones and minerals. Each product is ethically
              sourced and carefully inspected to ensure authenticity and
              excellence. Explore our collection today and discover the perfect
              gemstone for your needs.
            </p>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default ProductInfo;
