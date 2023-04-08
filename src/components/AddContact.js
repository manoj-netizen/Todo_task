import React, { useState } from "react";

function AddContact (props){
  const intialdata = {
    name: "",
    email: "",
    isChecked: false
  };
  const [userdata, setuserdata] = useState(intialdata);

 const add = (e) => {
    // e.preventDefault();
    if (userdata.name === "" || userdata.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addContactHandler(userdata);
    // this.setState({ name: "", email: "" });
    setuserdata(intialdata)
  };
  
    return (
      <div className="ui main">
        <h2></h2>
        <form className="ui form" onSubmit={() =>add()}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={userdata.name}
              onChange={(e) => setuserdata({...userdata , name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={userdata.email}
              onChange={(e) => setuserdata({...userdata , email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }


export default AddContact;
