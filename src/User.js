// User.js
import React, { useState } from 'react';
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';

const User = () => {
  const [userData, setUserData] = useState([
    { id: 1, image: 'https://drive.google.com/uc?export=view&id=1qw3KUJnYgvnJHQP-yY13u_rXrJO8ZbL_', username: 'Rakhi Gupta', email: 'rakhigupta@gmail.com', department: 'Engineering' },
    { id: 2, image: 'https://drive.google.com/uc?export=view&id=1KV8Ob2wXIcobIvayGGDB1qUpQn_iZKIp', username: 'Anjali', email: 'anjali@gmail.com', department: 'Engineering' },
    // Add more initial user data as needed
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleEdit = (user) => {
    // Implement edit logic here
    console.log('Edit user:', user);
  };

  const handleDelete = (userId) => {
    // Implement delete logic here
    setUserData((prevData) => prevData.filter((user) => user.id !== userId));
  };

  const handleAddUser = () => {
    // Show the form on "Add User" button click
    setShowForm(true);
  };

  const handleFormClose = () => {
    // Close the form when needed
    setShowForm(false);
  };

  const handleFormSubmit = (formData) => {
    // Implement logic to handle the submitted form data
    console.log('Form submitted with data:', formData);

    // Close the form after submission
    setShowForm(false);
  };

  return (
    <div className='userpage'>
      {showForm && (
        <FormComponent onClose={handleFormClose} onSubmit={handleFormSubmit} />
      )}
      <TableComponent data={userData} onEdit={handleEdit} onDelete={handleDelete} />
      <div className='add-user-button'>
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default User;
