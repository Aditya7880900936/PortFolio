import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/Aditya7880900936"
            className=" flex items-center justify-center"
            target="_blank"
          >
            <img
              src="/assets/github.svg"
              alt="github icon"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/aditya-sanskar-srivastav-a13b08327/"
            className=" flex items-center justify-center"
            target="_blank"
          >
            <img
              src="/assets/linkedin.svg"
              alt="twitter icon"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href=""
            className=" flex items-center justify-center"
            target="_blank"
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram icon"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>
      <p className="text-white-500">©  2024 Aditya. All rights reserved</p>
    </section>
  );
};

export default Footer;
