import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { SlLike } from "react-icons/sl";

const MessageBox = ({ name, obj, key, id}) => {
    const[likeC, setLikeC] = useState(obj.likeCount);
    const handleClick = () =>{
        setLikeC( likeC + 1);
    }
    return (
    <div className='msg-box'>
        <FaUserAlt className='user-icon'/>

        <div className="msg-box-inner">
            <h3>{name}</h3>
            <p> {obj.msg}</p>
            <div>
              <button onClick={ handleClick }><SlLike/></button>
               { likeC>0 ?<span>{likeC}</span> : null }
            </div>
               
        </div>
              
    </div>
  )
}

export default MessageBox