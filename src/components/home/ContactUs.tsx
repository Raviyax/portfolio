import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  const message =
    "Hi Ravishan, I'm reaching out to you from your website. I have a question about your services.";
  return (
    <>
      <section className="bg-[var(--dialogColor)] w-full" id="contact">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-10 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Contact Me
              </h2>
              <div className="mt-8">
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <FaPhone className="text-black text-lg" />
                    </div>
                    <a
                      href="tel:+94702165052"
                      className="text-gray-700 text-sm ml-4 dark:text-white"
                    >
                      <small className="block">Phone</small>
                      <strong>+94 76 928 6535</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoLogoWhatsapp className="text-black text-lg" />
                    </div>
                    <a
                      href={`https://wa.me/94769286535?text=${encodeURIComponent(
                        message
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-sm ml-4  dark:text-white"
                    >
                      <small className="block">Whatsapp</small>
                      <strong>+94 76 928 6535</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoMail className="text-black text-lg" />
                    </div>
                    <a
                      href="mailto:info@msiclabs.com"
                      className="text-gray-700 text-sm ml-4  dark:text-white"
                    >
                      <small className="block">Email</small>
                      <strong>info@raviyax.site</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
