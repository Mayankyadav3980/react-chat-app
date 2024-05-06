import React, { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Mention, MentionsInput } from "react-mentions";
import defaultStyle from "../assets/defaultStyle.js";
import user_list from "../assets/user_list.js";

const MessageInputBox = ({ curMsg, setCurMsg, handleChange, handleClick }) => {
  const [showEmojis, setShowEmojis] = useState(false);

  const handleEmojiClick = () => {
    setShowEmojis(!showEmojis);
  };
  const addEmoji = (e) => {
    setCurMsg({ msg: curMsg + e.native, likeCount: 0 });
    setShowEmojis(!showEmojis);
  };

  return (
    <div className="msg-inp-box">
      <div className="msg-inp">
        <MentionsInput
          value={curMsg}
          onChange={handleChange}
          placeholder={"  type message here... / mention people using '@'"}
          className="msg-inp-inner"
          style={defaultStyle}
        >
          <Mention data={user_list} style={{ backgroundColor: "#5BBCFF" }} />
        </MentionsInput>
        <div className="emoji-picker">
          {showEmojis && (
            <div className="emojis">
              <Picker data={data} onEmojiSelect={addEmoji} />{" "}
            </div>
          )}
          <button type="button" className="btn" onClick={handleEmojiClick}>
            <BsEmojiSmile />
          </button>
        </div>
      </div>
      { curMsg != '' && <button onClick={handleClick} >
        {" "}
        <LuSendHorizonal />
      </button> }
    </div>
  );
};

export default MessageInputBox;
