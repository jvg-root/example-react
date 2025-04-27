import React from "react";

const Paginator: React.FC<{ currentPage: number; totalPages: number; nextPage: () => void; prevPage: () => void }> = ({
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  }) => {
    return (
      <div className="flex gap-4 mt-4">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
  
        <span className="font-bold text-gray-700">Page {currentPage} of {totalPages}</span>
  
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Paginator;