"use client"
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Modal Content</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-200">Close</button>
      </div>
    </div>
  );
};

export default Modal;
