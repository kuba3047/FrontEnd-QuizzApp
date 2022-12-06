/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import react, { useState, useEffect } from "react";
import axios from "axios";
import { STRAPI_URL } from "../utils/strapi_url";

export default function Quiz() {
  const [data, setData] = useState([]);
  async function getPointsData() {
    try {
      const response = await axios.get(STRAPI_URL + "/api/leader-boards");
      var result = response.data.data;
      sortData(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (data.length == 0) {
      getPointsData();
    }
  });

  const sortData = (result) => {
    result.sort(function (a, b) {
      return b.attributes.points - a.attributes.points;
    });
    setData(result.slice(0, 3));
  };
  return (
    <section className="bg-white mt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl mt-10 ">
          Top Scores.
        </h1>

        <div className="container mx-auto overflow-x-auto relative mt-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-green-500 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Rank
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Points
                </th>
              </tr>
            </thead>
            {data.map((d, value) => (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6  text-gray-900 whitespace-nowrap font-bold"
                  >
                    {value + 1}
                  </th>
                  <td className="py-4 px-6 text-md font-bold">
                    {d.attributes.user_name}
                  </td>
                  <td className="py-4 px-6 text-md font-bold">
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
