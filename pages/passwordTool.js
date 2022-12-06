/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import PasswordGen from "../components/PasswordGen";
import PasswordStrength from "../components/PasswordStrength";
import PasswordLeackChecker from "../components/PasswordLeackChecker";
export default function PasswordTool() {
  const [range, setRange] = useState();
  return (
    <section className="bg-white mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl mt-10 ">
          Test and Generate Your Passwords.
        </h1>
        <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 ">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <section className="text-gray-600 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./password.jpg"
                  alt="blog"
                />
                <PasswordLeackChecker />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./password.jpg"
                  alt="blog"
                />
                <PasswordGen />
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./password.jpg"
                  alt="blog"
                />
                <PasswordStrength />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
