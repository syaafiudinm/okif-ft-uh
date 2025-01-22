const Hero = () => {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('/compute.jpg')] bg-gray-700 bg-blend-multiply mb-12">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-48 lg:py-64">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Website Resmi OKIF FT-UH
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            kenal lebih jauh dengan Organisasi Kemahasiswaan Informatika
            Fakultas Teknik Universitas Hasanuddin!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-wrap items-center">
          <div className="flex-1 py-8 px-4">
            <img
              src="/foto2.jpg"
              alt=""
              className="rounded-lg shadow-xl max-w-full"
              width={800}
            />
          </div>
          <div className="lg:flex-1 px-4">
            <h3 className="text-3xl font-bold mb-4">Mengenal OKIF FT-UH</h3>
            <p className="break-words mb-4">
              OKIF FT-UH adalah organisasi kemahasiswaan non-struktural di
              Departemen Teknik Informatika intra Universitas Hasanuddin yang
              berstatus otonom dan secara struktural merupakan bagian dari
              OKFT-UH yang mengacu pada bagan struktur OKFT-UH.
            </p>
            <p className="break-words">
              OKIF FT-UH adalah organisasi kemahasiswaan non-struktural di
              Departemen Teknik Informatika intra Universitas Hasanuddin yang
              berstatus otonom dan secara struktural merupakan bagian dari
              OKFT-UH yang mengacu pada bagan struktur OKFT-UH.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
