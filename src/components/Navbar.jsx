"use client";

import { initFlowbite } from "flowbite";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    initFlowbite();
  }, []);

  const isActive = (path) =>
    pathname === path
      ? "text-sky-700 font-bold"
      : "text-gray-900 dark:text-white";

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 px-10 fixed top-0 z-50 w-full">
      <div className="flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="Okif.svg" className="h-16" alt="OKIF FT-UH Logo" />
          <div className="pb-1">
            <span className="hidden md:block self-center text-sm font-bold whitespace-nowrap dark:text-white text-sky-600">
              Organisasi Kemahasiswaan Informatika <br /> Fakultas Teknik
              Universitas Hasanuddin
            </span>
            <span className="block md:hidden self-center text-md font-semibold whitespace-nowrap dark:text-white text-sky-600">
              OKIF FT UH
            </span>
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive(
                  "/"
                )}`}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/struktur"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive(
                  "/struktur"
                )}`}
                aria-current={pathname === "/program" ? "page" : undefined}
              >
                Struktur Organisasi
              </a>
            </li>
            <li>
              <a
                href="/program"
                className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${isActive(
                  "/program"
                )}`}
                aria-current={pathname === "/program" ? "page" : undefined}
              >
                Program Kerja 24/25
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
