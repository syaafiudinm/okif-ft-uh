"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

const Jobdesc = () => {
  const [jobdesc, setJobdesc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchJobdesc = async () => {
      setLoading(true);
      setError(null);

      const from = (currentPage - 1) * itemsPerPage;
      const to = from + itemsPerPage - 1;

      const { data, error } = await supabase
        .from("jobdesc")
        .select("*")
        .order("id", { ascending: true })
        .range(from, to);

      if (error) {
        setError(error.message);
      } else {
        setJobdesc(data);
      }
      setLoading(false);
    };

    fetchJobdesc();
  }, [currentPage]);

  useEffect(() => {
    const fetchTotalItems = async () => {
      const { count } = await supabase
        .from("jobdesc")
        .select("*", { count: "exact", head: true });
      setTotalItems(count || 0);
    };

    fetchTotalItems();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-lg">...</span>
      </div>
    );

  if (error)
    return <div className="text-red-500 text-center">Error: {error}</div>;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="mx-10 my-10">
      <div className="relative overflow-x-auto shadow-lg outline outline-1 outline-slate-400 sm:rounded-lg rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-800 uppercase dark:text-gray-400">
            <tr>
              <th className="text-xl px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Deskripsi Kerja
              </th>
              <th className="text-xl px-6 py-3 dark:bg-gray-800">
                Penanggung Jawab
              </th>
              <th className="text-xl px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Kompartemen
              </th>
            </tr>
          </thead>
          <tbody>
            {jobdesc.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {item.name}
                </td>
                <td className="px-6 py-4">{item.pj}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {item.kompartemen}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center mt-5">
        {/* Help text */}
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {startItem}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {endItem}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalItems}
          </span>{" "}
          Entries
        </span>

        {/* Pagination Buttons */}
        <div className="inline-flex mt-2">
          <button
            className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobdesc;
