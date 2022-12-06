/* eslint-disable @next/next/no-img-element */
import react from "react";
import Sidebar from "../components/Sidebar";
import EmailsList from "../components/emailsList";
import EmailView from "../components/emailView";
export default function Email() {
  return (
    <section className="bg-white mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl mt-10 ">
          Protect Yourself From Email Phishing.
        </h1>
        <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 xl:px-48 ">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex gap-2 justify-center ">
          <Sidebar />
          <EmailView />
        </div>
      </div>
    </section>
  );
}
