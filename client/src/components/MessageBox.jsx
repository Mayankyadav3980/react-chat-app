import React, { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { SlLike } from "react-icons/sl";

const MessageBox = ({ name, obj, key, id }) => {
  const [likeC, setLikeC] = useState(obj.likeCount);
  const handleClick = () => {
    setLikeC(likeC + 1);
  };
  return (
    <div className="msg-box">
      <PiUserCircleLight className="user-icon" />

      <div className="msg-box-inner">
        <h4>{name}</h4>
        <p> {obj.msg}</p>
        <div>
          <button onClick={handleClick}>
            <SlLike />
          </button>
          {likeC > 0 ? <span>{likeC}</span> : null}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
