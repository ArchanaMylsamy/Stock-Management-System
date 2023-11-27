// TableComponent.js
import React from 'react';
import './User.css';

const TableComponent = ({ data, onEdit, onDelete }) => {
  return (
    <div className="header_fixed">
      <table>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Image</th>
            <th>Username</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td><img src={row.image} alt={`user-${row.id}`} /></td>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.department}</td>
              <td>
                <button onClick={() => onEdit(row)}>Edit</button>
                <button onClick={() => onDelete(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
