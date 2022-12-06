/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import react, { useState, useEffect } from "react";
import axios from "axios";
import { STRAPI_URL } from "../utils/strapi_url";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const [isLoggedin, setisLoggedin] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const auth = useSelector((state) => state.auth.isLoggedin);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [emailsPoint, setEmailsPoint] = useState([]);
  async function getPointsData() {
    try {
      const response = await axios.get(STRAPI_URL + "/api/leader-boards");
      const result = response.data.data;
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }
  async function getEmailsPoints() {
    try {
      const response = await axios.get(STRAPI_URL + "/api/email-scores");
      const result = response.data.data;
      setEmailsPoint(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data.length == 0) {
      getPointsData();
    }
    if (emailsPoint.length == 0) {
      getEmailsPoints();
    }
  });
  useEffect(() => {
    setisLoggedin(localStorage.getItem("isLoggedin"));
    setLoaded(true);
  });
  useEffect(() => {
    if (loaded) {
      if (!isLoggedin) {
        router.push("/login");
      }
    }
  }, [loaded]);

  return (
    <section className="bg-white mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl mt-10 ">
          Quiz Points Data
        </h1>

        <div className="container mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Points
                </th>
                <th scope="col" className="py-3 px-6">
                  Level
                </th>
              </tr>
            </thead>
            {data.map((d) => (
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {d.id}
                  </th>
                  <td className="py-4 px-6 text-gray-900">
                    {d.attributes.user_name}
                  </td>
                  <td className="py-4 px-6 text-gray-900">
                    {d.attributes.user_email}
                  </td>
                  <td className="py-4 px-6 text-gray-900">
                    {d.attributes.points}
                  </td>
                  <td className="py-4 px-6">Easy</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-3xl mt-10 ">
          Email Points Data
        </h1>

        <div className="container mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Points
                </th>
              </tr>
            </thead>
            {emailsPoint.map((d) => (
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {d.id}
                  </th>
                  <td className="py-4 px-6 text-gray-900">
                    {d.attributes.user_name}
                  </td>
                  <td className="py-4 px-6 text-gray-900">
                    {d.attributes.user_email}
                  </td>
                  <td className="py-4 px-6 text-gray-900">
                    {d.attributes.points}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
