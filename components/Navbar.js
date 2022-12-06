/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const [isLoggedin, setisLoggedin] = useState(false);
  const auth = useSelector((state) => state.auth.isLoggedin);
  const router = useRouter();
  useEffect(() => {
    setisLoggedin(auth);
    setisLoggedin(localStorage.getItem("isLoggedin"));
  }, [auth]);

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    setisLoggedin(false);
    localStorage.removeItem("isLoggedin");
    router.push("/login");
  };

  return (
    <div>
      <nav className="bg-gray-900 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" passHref>
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                QuizApp
              </span>
            </a>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-900 md:bg-gray-900">
              <Link href="/" passHref>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 rounded hover:bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link href="/learn" passHref>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 rounded hover:bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                  >
                    Learn
                  </a>
                </li>
              </Link>
              <Link href="/passwordTool" passHref>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 rounded hover:bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                  >
                    Password Tool
                  </a>
                </li>
              </Link>
              <Link href="/quiz" passHref>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 rounded hover:bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                  >
                    Take Quiz
                  </a>
                </li>
              </Link>
              <Link href="/emailSecurity" passHref>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 rounded hover:bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                  >
                    Email
                  </a>
                </li>
              </Link>
              {isLoggedin ? (
                <>
                  <Link href="/dashboard">
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 rounded bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:text-green-500 md:bg-transparent text-white-500 md:dark:hover:bg-transparent font-bold"
                      >
                        Dashboard
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 rounded bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:text-green-500 md:bg-transparent text-white-500 md:dark:hover:bg-transparent font-bold"
                      onClick={(e) => handleLogOut(e)}
                    >
                      LogOut
                    </a>
                  </li>
                </>
              ) : (
                <Link href="/login" passHref>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 rounded bg-green-500 text-lg md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:text-green-500 md:bg-transparent text-white-500 md:dark:hover:bg-transparent font-bold"
                    >
                      Login
                    </a>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
