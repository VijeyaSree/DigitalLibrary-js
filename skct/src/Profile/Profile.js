import React, { useState, useEffect } from 'react';
import './Profile.css'; // Importing the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: 'example_user',
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@example.com',
    bio: 'Lorem ipsum dolor sit amet...',
    profilePicture: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profile picture from gallery when component mounts
    fetchProfilePicture();
  }, []);

  const fetchProfilePicture = () => {
    // Replace with actual logic to fetch image URL from gallery API
    const galleryImageURL = 'https://via.placeholder.com/150'; // Placeholder
    setFormData({ ...formData, profilePicture: galleryImageURL });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      // Implement API call or other logic to save updated data
      setIsEditing(false);
      // Handle success (e.g., display a success message)
    } catch (error) {
      console.error('Error saving profile:', error);
      // Handle errors gracefully (e.g., display an error message to the user)
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Implement image upload logic (e.g., using a library like Cloudinary)
    // Update profilePicture state with the uploaded image URL
  };
const navi=useNavigate();
const handleHome=()=>{
    navi('/home')
}
  return (
    <div className="profile-page">
      <div className="profile-header">
        <span className="profile-icon" onClick={() => navigate('/profile')}>
          <img src={formData.profilePicture} alt="Profile" onClick={fetchProfilePicture}/>
        </span>
        <h2>{isEditing ? <input type="text" name="username" value={formData.username} onChange={handleChange} /> : formData.username}</h2>
        <p>{isEditing ? (
          <>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </>
        ) : (
          <>
            {formData.firstName} {formData.lastName}
          </>
        )}</p>
        <p>{formData.email}</p>
        {isEditing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEditClick}>Edit Profile</button>
        )}
      </div>
      <div className="profile-body">
        <h3>Bio</h3>
        <p>{isEditing ? (
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        ) : formData.bio}</p>
        {isEditing && <input type="file" onChange={handleImageUpload} />}
        <button onClick={handleHome}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;