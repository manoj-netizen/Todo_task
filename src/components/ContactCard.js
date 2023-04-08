import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email , isChecked , onCheckStrike} = props.contact;
  return (
   
    <div className="item">
   
      <div className="content">
     
      <div className="header"><input checked={isChecked} onChange={(e) => onCheckStrike( )} type="checkbox"/>{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
     
    </div>
  );
};

export default ContactCard;
