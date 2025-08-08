'use client';

import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const getPageLink = (page: number) => `/products?page=${page}`;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {/* Prev Button */}
      <Link
        href={getPageLink(currentPage - 1)}
        className={`p-3 rounded-full flex items-center ${
          currentPage === 1
            ? "opacity-50 pointer-events-none"
            : "bg-gray-200 hover:bg-gray-300 transition-all duration-300"
        }`}
        aria-label="Previous page"
      >
        <FiChevronLeft className="text-xl" />
      </Link>

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={getPageLink(page)}
          className={`p-3 rounded-full cursor-pointer ${
            page === currentPage
              ? "text-accent font-bold text-xl"
              : "text-black"
          }`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      <Link
        href={getPageLink(currentPage + 1)}
        className={`p-3 rounded-full flex items-center ${
          currentPage === totalPages
            ? "opacity-50 pointer-events-none"
            : "bg-gray-200 hover:bg-gray-300 transition-all duration-300"
        }`}
        aria-label="Next page"
      >
        <FiChevronRight className="text-xl" />
      </Link>
    </div>
  );
}
