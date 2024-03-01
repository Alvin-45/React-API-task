import React, { useState, useEffect } from "react";

const UserAddress = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);

  const fetchUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const data = await response.json();
    setUser(data);
  };

  const handleRefresh = () => {
    const newUserId = Math.floor(Math.random() * 10) + 1;
    setUserId(newUserId);
    fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  return (
    <>
        <div className="user-address text-center fullbody"style={{marginTop:'150px'}}>
            <div className="row">
                <div className="col">
                    <div className="imagediv" style={{width:'115px',height:'115px',borderRadius:'50%',border:'1px solid',margin:'auto'}}>
                        <img src={user && user.image} alt="" style={{width:'100px',height:'100px',borderRadius:'50%',marginTop:'10px'}}/>
                    </div>
                  <h3>
                    {user && user.firstName} {user && user.lastName} <br />
                    <span className="gnd" style={{fontWeight:'400'}}>{user && user.gender}</span>
                  </h3>
                  {user && (
                    <>
                      <div className="row">
                          <div className="col">
                              <p><span className="mhead" style={{fontWeight:'800'}}>Birth Date:</span><br />{user.birthDate}</p>
                              <p><span className="mhead" style={{fontWeight:'800'}}>Weight:</span><br />{user.weight}</p>
                          </div>
                          <div className="col">
                              <p><span className="mhead" style={{fontWeight:'800'}}>Age:</span><br />{user.age}</p>
                              <p className="details" ><span className="mhead" style={{fontWeight:'800'}}>Height:</span><br />{user.height}</p>
                          </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="col seccont">
                {user && (
                    <>
                      <p className="details"><span className="mhead" style={{fontWeight:'800'}}>Home Address:</span><br />{user.address.address}</p>
                      <p><span className="mhead" style={{fontWeight:'800'}}>Mobile Number:</span><br />{user.phone}</p>
                      <p><span className="mhead" style={{fontWeight:'800'}}>Company:</span><br />{user.company.address.address},<br />{user.company.address.city}</p>
                      <p><span className="mhead" style={{fontWeight:'800'}}>Job Title:</span><br />{user.company.title}</p>
                      <p><span className="mhead" style={{fontWeight:'800'}}>Email:</span><br />{user.email}</p>
                      
                    </>
                  )}
                </div>
            </div>
          <button className="btn btn-success ps-5 pe-5 mt-5" onClick={handleRefresh}>Refresh</button>
        </div>
    </>
  );
};

export default UserAddress;