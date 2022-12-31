import React, { useRef } from "react";
import emailjs from "../../node_modules/emailjs-com";
// import emailjs from '@emailjs/browser';
const SERVICE_ID = "service_wbssuhc";
const TEMPLATE_ID = "template_cq05vio";
const YOUR_PUBLIC_KEY = "BXlB54J7pi6qndG9H";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Fill the Below Form and Get In Touch With me.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <form ref={form}>
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  label="Name"
                  placeholder="Name…"
                  id="form-input-control-last-name"
                  name="user_name"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email…"
                  label="Email"
                  id="form-input-control-email"
                  name="user_email"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />

                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="form-textarea-control-opinion"
                  name="user_message"
                  placeholder="Message…"
                  label="Message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>

                <button
                  className="flex header-button mx-auto text-white focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={sendEmail}
                >
                  Submit
                </button>
              </form>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">rohitsingh182000@gmail.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Bangalore,KA
                </p>
                <span className="inline-flex">
                  <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/rohit-singh-7a57831b3/" target="_blank">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500" href="https://twitter.com/officialrohit85" target="_blank">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500" href="https://www.instagram.com/rohit_singh.ig/" target="_blank">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  s;
};

export default Contact;
