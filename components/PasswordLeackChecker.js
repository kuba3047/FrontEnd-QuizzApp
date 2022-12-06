/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import axios from "axios";
import sha1 from "js-sha1";

export default function PasswordLeackChecker() {
  const [handelText, setHandelText] = useState("");
  const [message, setMessage] = useState("");
  const [breached, setBreached] = useState(false);

  const sha1Convert = () => {
    var hash = sha1(handelText).toUpperCase();
    var prefix = hash.substring(0, 5);
    var suffix = hash.substring(5, hash.length);
    getUserData(prefix, suffix);
  };

  async function getUserData(prefix, suffix) {
    try {
      const response = await axios.get(
        "https://api.pwnedpasswords.com/range/" + prefix
      );
      var result = response.data;
      calculateResult(result, suffix);
    } catch (error) {
      console.log(error);
    }
  }
  const calculateResult = (result, suffix) => {
    var hashes = result.split("\n");
    var breached = false;
    for (let i = 0; i < hashes.length; i++) {
      var hash = hashes[i];
      var h = hash.split(":");
      if (h[0] === suffix) {
        breached = true;
        setBreached(true);
        setMessage("Ohh!!! The password has been breached " + h[1] + " times");
        break;
      }
    }
    if (!breached) {
      setBreached(false);
      setMessage("Great!!! The password has not been breached");
    }
  };

  return (
    <>
      <div className="mt-2 p-3">
        <h1 className="flex justify-center font-bold text-xl mb-5">
          Password Leack Checker
        </h1>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Enter Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={handelText}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="*********"
          onChange={(e) => setHandelText(e.target.value)}
        />
        <div>
          <h1
            className={
              breached
                ? "font-bold text-red-500 mt-4"
                : "font-bold text-green-500 mt-4"
            }
          >
            {message}
          </h1>
        </div>
      </div>
      <div
        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-center justify-center cursor-pointer flex mt-2 mx-auto"
        onClick={(e) => sha1Convert()}
      >
        Leacked?
      </div>
    </>
  );
}
