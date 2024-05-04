import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { IoMdAddCircleOutline } from "react-icons/io";




const ChannelListContainer = () => {
  return (
    <>
    <div className='channel-list__container'>
        <div className="channel-list__leftbar">
            <FaHouseChimneyWindow className='icon'/>
            <TiThMenu className='icon'/>
        </div>

        <div className="channel-list__rightbar">
            <div className="user">
            <FaRegUserCircle className='icon'/>
            <div>
                <h3>Rolande Raimondi</h3>
                <h6>Research Nurse</h6>

            </div>
            </div>
            <div className="rightbar__searchbox">
                <FaSearch className='search-icon'/>
                <p className="rightbar__searchText">Search</p>
            </div>
            <div className='add-conversations'>
                <p>Conversations</p>
                <IoMdAddCircleOutline/>
            </div>
            <div className="rightbar__userlist">
                <div className="userlist__user">
                    <FaRegUserCircle className='icon'/>
                    <p>Mayank</p>
                </div>
                <div className="userlist__user">
                    <FaRegUserCircle className='icon'/>
                    <p>Shivam</p>
                </div>
                <div className="userlist__user">
                    <FaRegUserCircle className='icon'/>
                    <p>Sam</p>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default ChannelListContainer;