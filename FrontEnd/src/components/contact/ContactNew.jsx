import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactNew = () => {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    // console.log(data);
    setIsLoading(true);
    await emailjs
      .sendForm(
        "service_eidoz4j",
        "template_yc6l6on",
        data,
        "wlgzkitoPbCq2GDCW"
      )
      .then(
        (result) => {
          //    console.log(result.text);
          setIsLoading(false);
          setSent(true);
        },
        (error) => {
          setIsLoading(false);
          //    console.log(error.text);
          //    alert(
          //      "An error occurred while sending the Message. Please try again later."
          //    );
        }
      );
  };

  useEffect(() => {
    if (sent) {
      const timeout = setTimeout(() => {
        setSent(false);
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timeout);
    }
  }, [sent]);

  //   console.log(errors);

  return (
    <section className="">
      <div className="sm:px-6 md:px-12 mt-32">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          {/* alert */}
          {sent && (
            <div className="relative items-center w-full pb-3 animate-fade-in">
              <div className="p-2 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-green-600">
                      <p>Your Message Received Successfully</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-10 lg:flex-row flex-col ">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name="fullName"
                    className={`peer block min-h-[auto] w-full ${
                      errors?.fullName ? "outline-red-400" : "outline-gray-400"
                    } rounded border-2  py-[0.32rem] px-3 leading-[1.6] `}
                    {...register("fullName", {
                      required: true,
                    })}
                    placeholder="Full Name"
                  />
                </div>
                <div className="">
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      name="email"
                      className={`peer block min-h-[auto] w-full ${
                        errors?.email ? "outline-red-400" : "outline-gray-400"
                      } rounded border-2  py-[0.32rem] px-3 leading-[1.6] `}
                      {...register("email", {
                        required: true,
                      })}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      name="phone"
                      className={`peer block min-h-[auto] w-full ${
                        errors?.phone ? "outline-red-400" : "outline-gray-400"
                      } rounded border-2  py-[0.32rem] px-3 leading-[1.6] `}
                      placeholder="Phone Number"
                      {...register("phone", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    name="message"
                    className={`peer block min-h-[auto] w-full ${
                      errors?.message ? "outline-red-400" : "outline-gray-400"
                    } rounded border-2  py-[0.32rem] px-3 leading-[1.6] `}
                    rows="3"
                    placeholder="Message"
                    {...register("message", {
                      required: true,
                    })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mb-6 w-full rounded bg-[#fb930a] text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0"
                >
                  {isLoading ? "Sending ..." : "Send Message"}
                </button>
              </form>
            </div>
            {/* address info */}
            <div className="">
              <p className="mb-5 text-lg text-gray-600">
                Our workplace is equipped with state-of-the-art facilities to
                ensure a conducive environment for gemstone cutting and
                processing.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fb930a] text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Our Address
                    </h3>
                    <p className="text-gray-600 text-lg  dark:text-slate-400">
                      Bole, Harmony Hotel SA Building 6th floor no.2
                    </p>
                    <p className="text-gray-600 text-lg  dark:text-slate-400">
                      Addis Ababa, Ethiopia.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fb930a] text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Contact
                    </h3>
                    <p className=" text-lg text-slate-400">
                      Mobile: +251967272727
                    </p>

                    <p className="text-lg text-slate-400">
                      Mail: mercygems109 @gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fb930a] text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                      Working hours
                    </h3>
                    <p className="text-slate-400 text-lg">
                      Monday - Friday : 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-slate-400 text-lg">
                      Saturday : 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div
        id="map"
        className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d246.29623444589228!2d38.78560017093671!3d8.996077962584172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSA%20Building!5e0!3m2!1sen!2set!4v1706382772823!5m2!1sen!2set"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactNew;
