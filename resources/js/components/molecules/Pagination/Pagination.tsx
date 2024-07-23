import * as React from 'react';
import { cn } from '../../../lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (!isFirstPage) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-1 mx-1 rounded-md ${
            currentPage === i ? 'text-white bg-primary' : 'bg-gray-200 text-gray-600'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevClick}
        disabled={isFirstPage}
        className={`px-4 py-2 rounded-md ${
          isFirstPage ? 'opacity-50 cursor-not-allowed bg-gray-200' : 'bg-gray-200'
        }`}
      >
        &laquo;
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNextClick}
        disabled={isLastPage}
        className={`px-4 py-2 rounded-md ${
          isLastPage ? 'opacity-50 cursor-not-allowed bg-gray-200' : 'bg-gray-200'
        }`}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
