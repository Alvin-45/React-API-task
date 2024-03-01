import React from 'react'

function User() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch("https://dummyjson.com/users/1");
        const data = await response.json();
        setUser(data);
      };
  
      fetchUser();
    }, []);
  
    return (
      <div className="user-address">
        {user && (
          <>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.address.street}</p>
            <p>{user.address.city}, {user.address.country}</p>
            <p>{user.address.postcode}</p>
            <p>{user.phone}</p>
          </>
        )}
      </div>
    );
  };

export default User