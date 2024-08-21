import React from "react";
import Modal from "react-modal";

function Loading() {
  return (
    <>
      <Modal
        isOpen={true}
        className="flex items-center justify-center min-h-screen "
      >
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-solid"></div>
          {/* Loading Text */}
          <p className="mt-4 text-lg font-semibold text-white">Loading...</p>
        </div>
      </Modal>
    </>
  );
}

export default Loading;
