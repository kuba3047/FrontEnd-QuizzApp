/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

export default function PasswordStrength() {
  const [userInfo, setuserInfo] = useState({
    password: "",
  });

  const [isError, setError] = useState(null);
  const handleChangePassword = (e) => {
    let password = e.target.value;
    setuserInfo({
      ...userInfo,
      password: e.target.value,
    });
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount;
    if (password.length < 4) {
      setError(
        "Password must be minimum 4 characters include one UPPERCASE, lowercase, number and special character: @$! % * ? &"
      );
      return;
    } else {
      capsCount = (password.match(/[A-Z]/g) || []).length;
      smallCount = (password.match(/[a-z]/g) || []).length;
      numberCount = (password.match(/[0-9]/g) || []).length;
      symbolCount = (password.match(/\W/g) || []).length;
      if (capsCount < 1) {
        setError("Must contain one UPPERCASE letter");
        return;
      } else if (smallCount < 1) {
        setError("Must contain one lowercase letter");
        return;
      } else if (numberCount < 1) {
        setError("Must contain one number");
        return;
      } else if (symbolCount < 1) {
        setError("Must contain one special character: @$! % * ? &");
        return;
      }
    }
  };

  const [isStrength, setStrength] = useState(null);
  const dataHandler = async (childData) => {
    setStrength(childData);
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      console.log(userInfo.password);
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div className="mt-2 p-3">
        <h1 className="flex justify-center font-bold text-xl mb-5">
          Password Strength Checker
        </h1>
        <div>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password{" "}
            {isError !== null && <p className="text-red-500"> - {isError}</p>}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChangePassword}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder=""
          />
        </div>
        <div className="mt-5">
          <PasswordStrengthMeter
            password={userInfo.password}
            actions={dataHandler}
          />
        </div>
      </div>
    </>
  );
}
