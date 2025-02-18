import React from "react";

const Jobdesc = () => {
  return (
    <>
      <div className="mx-10 my-10">
        <div className="relative overflow-x-auto shadow-lg outline outline-1 outline-slate-400 sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Deskripsi Kerja
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Penanggung Jawab
                </th>
                <th scope="col" className="px-6 py-3">
                  Kompartemen
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Laptop
                </td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Laptop PC
                </td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Accessories
                </td>
                <td className="px-6 py-4">$99</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Google Pixel Phone
                </th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">Phone</td>
                <td className="px-6 py-4">$799</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  Apple Watch 5
                </th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  Wearables
                </td>
                <td className="px-6 py-4">$999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Jobdesc;
