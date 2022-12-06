import Link from "next/link";
import react, { useState, useEffect } from "react";
import axios from "axios";
import { STRAPI_URL } from "../utils/strapi_url";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { emailData } from "../EmailData/emails";

export default function EmailsList() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const [data, setData] = useState([]);
  const router = useRouter();

  const handleNavigation = (data, e) => {
    e.preventDefault();
    localStorage.setItem("emailData", JSON.stringify(data));
    router.push("/emailView");
  };

  async function getEmails() {
    try {
      const response = await axios.get(STRAPI_URL + "/api/emails");
      const result = response.data.data;
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data.length == 0) {
      getEmails();
    }
  });

  return (
    <section className="bg-gray-100">
      <div className="py-1 px-0 mx-auto max-w-screen-xl text-center lg:py-1 ">
        <div className="flex justify-between mb-5 mx-5 mt-2">
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-inbox-fill text-blue-800 mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
            </svg>
            <h1 className="text-blue-800">Primary</h1>
          </div>
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-tag text-black mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
              <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
            </svg>
            <h1 className="text-black">Promotions</h1>
          </div>
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-person text-black mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <h1 className="text-black">Social</h1>
          </div>
        </div>
        {data.map((email) => (
          <>
            <div
              className="flex md:gap-12 bg-blue-100 p-6 hover:bg-blue-200 cursor-pointer"
              onClick={(e) => handleNavigation(email, e)}
            >
              <div>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className=" text-black bg-gray-100 rounded border-gray-300 focus:ring-white "
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star text-black mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
              </svg>
              <h1 className="text-gray-900">{email.attributes.sender}</h1>
              <h1 className="text-gray-900">{email.attributes.subject}</h1>
              <h1 className="text-gray-900">08:20pm</h1>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
