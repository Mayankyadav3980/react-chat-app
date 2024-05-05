import React, { useState } from 'react'
import { MessageInputBox, MessageBox, Header } from './'


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
    setMsgList( (prev) => {
      return [...msgList , curMsg ];
    })
    setCurMsg({ msg:'', likeCount: 0});

  }

  return (
    
    <>
    <div className="channel-container">

      {/* header */}
      <Header/>

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
      <MessageInputBox
        curMsg = {curMsg.msg}
        setCurMsg ={ setCurMsg }
        handleChange = {handleChange}
        handleClick = {handleClick}
      />
      
      
    </div>
    </>
  )
}

export default ChannelContainer; 
