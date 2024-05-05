import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="channel-container__header">
      <div className="header__name">
        <p>Introductions</p>
        <span className="sub-heading">
          {" "}
          3 | 100 <HiOutlineUsers />
        </span>
      </div>
      <p className="sub-heading">This Channel Is For Company Wide Chatter</p>
    </div>
  );
};

export default Header;
