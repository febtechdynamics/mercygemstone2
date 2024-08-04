import sideImage from "./side-img.png";
import {Helmet} from "react-helmet";

const AboutNew = () => {
  return (
    <>
      <Helmet>
        <title>About Mercygem</title>
        <meta name="description" content=" Mercy Gem is a renowned supplier of exquisite gemstones and minerals,
            specializing in sourcing from the rich and diverse mines of
            Ethiopia. With a deep appreciation for the natural wonders found in
            this region, we are committed to offering a curated selection of
            high-quality gemstones that showcase the unique beauty and cultural
            heritage of Ethiopia." />
      </Helmet>
      <div className="bg-yellow-50  p-4">
        <div className="container mx-auto pt-12 pb-20">
          <h1 className=" text-4xl tracking-tight font-semibold text-primary-100 text-gray-700 text-center mb-8">
            Discover Mercygems ,
          </h1>
          <hr className="mt-3 mb-1 text-2xl font-medium text-yellow-400 py-3 " />
          <p className="text-gray-700 text-lg leading-1 ">
            <span className="bg-orange-400 text-white p-0.5 rounded-lg px-3 mr-1">
              Mercy Gem
            </span>
            is a renowned supplier of exquisite gemstones and minerals,
            specializing in sourcing from the rich and diverse mines of
            Ethiopia. With a deep appreciation for the natural wonders found in
            this region, we are committed to offering a curated selection of
            high-quality gemstones that showcase the unique beauty and cultural
            heritage of Ethiopia.
          </p>
          <p className="text-gray-700 text-lg pt-3 mb-12 leading-1">
            At Mercy Gem, we take great pride in our comprehensive knowledge of
            Ethiopian gemstones. Our expert team has a deep understanding of the
            geological characteristics and cultural significance of these
            treasures, allowing us to provide accurate information and guidance
            to our valued customers. Whether you are a collector, jewelry
            artisan, or enthusiast, we are here to share our expertise and help
            you find the perfect Ethiopian gemstone that aligns with your
            vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Mission</h2>
              <p className="text-gray-700">
                Our mission at Mercy Gem is to bring the wonders of the Earth's
                precious gemstones and minerals to enthusiasts, collectors, and
                jewelry artisans alike. We aim to connect people with the
                captivating beauty and spiritual energy that these natural
                creations possess.
              </p>
            </div>
            {/* vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Vision</h2>
              <p className="text-gray-700">
                Our vision is to be a trusted global leader in the gemstone
                industry, known for our exceptional quality, extensive
                selection, and commitment to customer satisfaction. We aspire to
                inspire creativity and passion for gemstones, serving as a
                reliable source for enthusiasts, collectors, and jewelry
                artisans worldwide.
              </p>
            </div>
            {/* more */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                More About
              </h2>
              <p className="text-gray-700">
                As a trusted authority in Ethiopian gemstones, we prioritize
                responsible sourcing and maintain strong relationships with
                local miners and suppliers. With a focus on ethical practices,
                we ensure that our gemstones are obtained in a sustainable and
                transparent manner, supporting the local communities and
                preserving the natural environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-gray-600">
            Our Values
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* image */}
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className="w-1/2 md:w-[400px] mx-auto"
              src={sideImage}
              alt="can_help_banner"
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">Quality</h3>
                <p className="text-sm">
                  We are dedicated to providing gemstones and minerals of the
                  highest quality. We meticulously select each stone, ensuring
                  its authenticity, brilliance, and unique characteristics. Our
                  commitment to quality extends to our customer service, where
                  we strive to exceed your expectations at every step.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">Integrity</h3>
                <p className="text-sm">
                  We conduct our business with the utmost integrity and
                  transparency. We believe in building trust with our customers
                  by offering genuine products, fair pricing, and honest
                  information. We are committed to ethical practices and
                  maintaining strong relationships with our suppliers and
                  miners, ensuring the integrity of our supply chain.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">Knowledge</h3>
                <p className="text-sm">
                  We value knowledge and expertise in the gemstone industry. Our
                  team consists of passionate gemstone enthusiasts who
                  continually strive to expand their knowledge and stay updated
                  with the latest trends and developments. We are dedicated to
                  sharing our expertise with our customers, providing guidance
                  and education to help you make informed decisions.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Customer Satisfaction
                </h3>
                <p className="text-sm">
                  Customer Satisfaction: Your satisfaction is our top priority.
                  We are committed to providing personalized service,
                  understanding your unique requirements, and assisting you in
                  finding the perfect gemstone or mineral that aligns with your
                  vision. We aim to create a positive and memorable experience
                  for each customer, ensuring that you feel valued and supported
                  throughout your journey with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNew;
