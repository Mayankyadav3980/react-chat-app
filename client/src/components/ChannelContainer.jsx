import React, { useState } from "react";
import { MessageInputBox, MessageBox, Header } from "./";
import users_list from "../assets/users_list";

const ChannelContainer = () => {
  const [msgList, setMsgList] = useState([]);
  const [curMsg, setCurMsg] = useState({
    msg: "",
    likeCount: 0,
  });

  const handleChange = (event) => {
    setCurMsg({
      msg: event.target.value,
      likeCount: 0,
    });
  };

  const handleClick = () => {
    setMsgList(() => {
      return [...msgList, curMsg];
    });
    setCurMsg({ msg: "", likeCount: 0 });
  };

  return (
    <div className="channel-container">
      {/* Intro of the group */}
      <Header />

      {/* message container section  */}
      <div className="msg-container">
        {msgList.map((obj, index) => {
          return (
            <MessageBox
              key={index}
              id={index}
              name={users_list[index]}
              obj={obj}
            />
          );
        })}
      </div>

      {/* message input box section  */}
      <MessageInputBox
        curMsg={curMsg.msg}
        setCurMsg={setCurMsg}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </div>
  );
};

export default ChannelContainer;
