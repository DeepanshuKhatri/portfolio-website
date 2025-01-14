import React from "react";

const TabButton = ({ children, active, selectTab }) => {
  const buttonClasses = active
    ? "text-white border-b border-primary-500"
    : "text-[#adb7be]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>

      {children}
      </p>
    </button>
  );
};

export default TabButton;
