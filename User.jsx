import React, { useEffect, useState } from 'react';
import getUser from '../../services/user';

const User = () => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const currentUser = await getUser();
    setUser(currentUser);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div>Welcome {user.name}</div>
    </div>
  );
};
export default User;
