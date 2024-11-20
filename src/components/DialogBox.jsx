import React from "react";

const DialogBox = ({ user, onClose }) => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-md relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
      >
        &#x2715;
      </button>
      <h2 className="text-2xl font-semibold mb-4 text-center">User Details</h2>
      <p className="mb-2">
        <strong>First Name:</strong> {user.firstName}
      </p>
      <p className="mb-2">
        <strong>Last Name:</strong> {user.lastName}
      </p>
      <p className="mb-2">
        <strong>Address:</strong> {user.address}
      </p>
      <p className="mb-4">
        <strong>Phone:</strong> {user.phoneNumber}
      </p>
      <button
        onClick={onClose}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  </div>
  
);

export default DialogBox;
