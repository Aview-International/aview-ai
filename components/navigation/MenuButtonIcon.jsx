import React from 'react';

const MenuButtonIcon = ({ styles, handler }) => {
  return (
    <div
      className={`flex cursor-pointer flex-col lg:hidden ${
        styles ?? ''
      }`}
      onClick={handler}
    >
      <div className="mb-2 h-[3px] w-[36px] rounded-full bg-white"></div>
      <div className="mb-2 h-[3px] w-[36px] rounded-full bg-white"></div>
      <div className="h-[3px] w-[36px] rounded-full bg-white"></div>
    </div>
  );
};

export default MenuButtonIcon;
