import React from 'react';
import user from './user.png';

const ContactCard = (props) => {
    const  { id, name, email}= props.contact;
  return (
    <div>
       <div className="item" style={{width: "60%", margin: "auto", marginTop: 33}}>
        <div className="content ">
          <div className="text_block d-flex">
              <img src={user} alt="user"></img>
        <div className='text_itme'>
        <h1 className="header"> {name} </h1>
          <h3 className="header"> {email} </h3>
        </div>
          </div>
          <i class="trash alternate outline icon"></i>

        </div>
      </div>
    </div>
  )
}

export default ContactCard
