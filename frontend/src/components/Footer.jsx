import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 sm:p-6 md:p-10 text-xs sm:text-sm md:text-base">
      <p className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center mb-1">
        <span>Conditions of Use & Sale</span>
        <span>Privacy Notice</span>
        <span>
          Contact us :{" "}
          <a
            href="mailto: demo.user@gmail.com"
            className="underline break-all"
          >
            demo.user@gmail.com
          </a>
        </span>
      </p>
      <p className="break-words">
        &copy; 2003-2025, Qshop.com, Inc. or its affiliates
      </p>
    </footer>
  );
};

export default Footer;
