import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [userData, setUserData] = useState({});
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const result = await response.json();

        if (response.ok) {
          setUserData(result);
        } else {
          console.error('Error fetching profile:', result.message);
          alert('Error fetching profile. Please try again.');
          navigate('/');
        }
      } catch (error) {
        console.error('Error during profile fetch:', error);
      }
    };

    if (user && user.id && user.token) {
      fetchProfile();
    }
  }, [user, navigate]);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div>
        <p>ID: {userData.id}</p>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
      </div>
    </div>
  );
}

export default Profile;
