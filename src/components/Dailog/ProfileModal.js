import React, { useState, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

export default function ProfileModal({ show, text, children }) {
  const { loggedIn } = useContext(LoginContext);

  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Backdrop opacity-100 to blur */}
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-0 transition-opacity"
          aria-hidden="true"
        ></div>
        <div
          class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          style={show ? {} : { display: "none" }}
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <p class="text-sm text-gray-500">{text}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
