import React, { useState } from 'react'
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './'
import { HiOutlineUsers } from "react-icons/hi2";
import { FaArrowAltCircleRight } from "react-icons/fa";
import MessageBox from './MessageBox';

const ChannelContainer = () => {
  const [msgList, setMsgList] = useState([]);
  const [curMsg, setCurMsg] = useState({
    msg:'',
    likeCount:0
  });
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin", "Alan", "Bob", "Carol", "Dean", "Elin"];

  const handleChange = (event) =>{
    setCurMsg( {
      msg:event.target.value,
      likeCount:0
  });
  }
  const handleClick =( event) =>{
    // setCurMsg(event.target.value);
    setMsgList( (prev) => {
      return [...msgList , curMsg ];
    })
    setCurMsg({ msg:'', likeCount: 0});

  }

  return (
    
    <>
    <div className="channel-container">
      {/* header */}
      <div className="channel-container__header">
        <div className="header__name">
        <p>Introductions</p>
        <span className="sub-heading"> 3 | 100  <HiOutlineUsers/></span>
        </div>
        <p className="sub-heading">
          This Channel Is For Company Wide Chatter
        </p>
        
      </div>

      {/* msg container  */}

      <div className="msg-container">
        { msgList.map((obj, index) => {
          return(  
          <MessageBox
            key={index}
            id={index}
            name = {user_list[index]}
            obj = {obj}
          />)
        })}
      </div>  

      {/* msg input box */}
      <div className='msg-inp-box'> 
      <input 
      type="text"
      placeholder='type message here...'
      className='msg-inp'
      value={ curMsg.msg }
      onChange={ handleChange }
      />
      <button onClick={ handleClick }> <FaArrowAltCircleRight/></button>
      </div>
      
      
    </div>
    </>
  )
}

export default ChannelContainer; 
