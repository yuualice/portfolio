"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* <Link href="/">
          <h1 className="font-semibold text-xl text-neutral-700">
            <span>Designed and Developed</span>
            <br />
            <span>by</span>
            <span className="text-blue-700"> Alice Yu</span>
            <span className="ml-2">💙 May 2023</span>
          </h1>
        </Link> */}
        <div className="flex flex-row m-2">
          <a
            href="https://www.linkedin.com/in/yuualice/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="items-center m-2"
              src="/linkedin.svg"
              width={25}
              height={25}
              alt="LinkedIn"
            ></Image>
          </a>
          <a
            href="https://github.com/yuualice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="items-center m-2"
              src="/github.svg"
              width={25}
              height={25}
              alt="Github"
            ></Image>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image
              className="items-center m-2"
              src="/resume.svg"
              width={25}
              height={25}
              alt="Resume"
            ></Image>
          </a>
        </div>
        <p className="text-xs text-neutral-600 mt-6">
          &copy; Copyright {new Date().getFullYear()} Alice Yu. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
