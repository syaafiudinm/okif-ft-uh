import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="pb-44 pt-16 px-12 bg-sky-900">
        <div className="flex justify-between">
          <div className="flex flex-col gap-10">
            <div>
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src="Okif.svg" className="h-16" alt="OKIF FT-UH Logo" />
                <div className="pb-1">
                  <span className="hidden md:block self-center text-sm font-bold whitespace-nowrap dark:text-white text-white">
                    Organisasi Kemahasiswaan Informatika <br /> Fakultas Teknik
                    Universitas Hasanuddin
                  </span>
                  <span className="block md:hidden self-center text-md font-semibold whitespace-nowrap dark:text-white text-white">
                    Organisasi Kemahasiswaan Informatika <br /> Fakultas Teknik
                    Universitas Hasanuddin
                  </span>
                </div>
              </a>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-6 h-6 mt-2 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="break-words text-sm text-white">
                Gedung Student Center Lt. 1 Fakultas Teknik <br /> Universitas
                Hasanuddin, Gowa 92171
              </p>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
              </svg>

              <p className="break-words text-sm text-white">
                okifftuh@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h3 className="font-bold text-white">UNIT KEGIATAN MAHASISWA</h3>
            <h3 className="font-semibold text-white ml-20">Coder Institute</h3>
          </div>
        </div>
        <div className="flex justify-between mt-32">
          <p className="text-white text-xs">
            © 2023 Organisasi Kemahasiswaan Informatika FT-UH (OKIF FT-UH)
          </p>
          <div className="flex gap-3">
            <a href="" className="text-white hover:underline">
              Instagram
            </a>
            <a href="" className="text-white hover:underline">
              Tiktok
            </a>
            <a href="" className="text-white hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
