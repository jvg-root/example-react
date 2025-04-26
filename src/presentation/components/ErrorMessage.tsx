import React from "react";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center">
        <strong>Error:</strong> {message}
        <button
          onClick={() => window.location.reload()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Retry
        </button>
      </div>
    );
  };
  
  export default ErrorMessage;
  