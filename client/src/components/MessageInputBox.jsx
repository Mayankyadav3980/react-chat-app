import React, { useState } from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import  Picker from "@emoji-mart/react";
import data from '@emoji-mart/data';

// import "emoji-mart/css/emoji-mart.css"
// import "emoji-mart"

const MessageInputBox = ({curMsg, setCurMsg, handleChange, handleClick}) => {
  const [showEmojis, setShowEmojis] = useState(false);
  // const [ currentEmoji, setCurrentEmoji] = useState(null);

  const handleEmojiClick = () => {
    setShowEmojis(!showEmojis);
    // console.log('i m clicked');
  } 
  const addEmoji = (e) => {
    // setCurrentEmoji(e.native);
    setCurMsg({msg:(curMsg + e.native), likeCount:0} );
    setShowEmojis(!showEmojis);
  }

  return (
    <div className='msg-inp-box'> 
    <div className="msg-inp">
      <input 
        type="text"
        placeholder='type message here...'
        className='msg-inp-inner'
        value={ curMsg }
        onChange={ handleChange }
        />
        <div className="emoji-picker">
            { showEmojis && (  <div className='emojis'><Picker 
              data={data} 
              onEmojiSelect = { addEmoji } 
              /> </div> )
           }
            <button type='button' className="btn" onClick={handleEmojiClick}><BsEmojiSmile/></button>
        </div>
       
    </div>
      <button onClick={ handleClick }> <FaArrowAltCircleRight/></button>
      </div>
  )
}

export default MessageInputBox