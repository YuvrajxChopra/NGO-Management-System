import React, { useState } from 'react';
import './UsersData.css';

const UsersData = () => {
  const data = [
    {
      username: 'johndoe',
      firstName: 'John',
      lastName: 'Doe',
      dob: '01/01/1990',
      phone: '123-456-7890',
      password: 'password1'
    },
    {
      username: 'janedoe',
      firstName: 'Jane',
      lastName: 'Doe',
      dob: '02/14/1992',
      phone: '098-765-4321',
      password: 'password2'
    },
    {
      username: 'user3',
      firstName: 'Bob',
      lastName: 'Smith',
      dob: '03/03/1992',
      phone: '345-678-9012',
      password: 'password3',
    },
    {
      username: 'user4',
      firstName: 'Alice',
      lastName: 'Johnson',
      dob: '04/04/1993',
      phone: '456-789-0123',
      password: 'password4',
    },
    {
      username: 'user5',
      firstName: 'Charlie',
      lastName: 'Brown',
      dob: '05/05/1994',
      phone: '567-890-1234',
      password: 'password5',
    },
    {
      username: 'user6',
      firstName: 'Dave',
      lastName: 'Williams',
      dob: '06/06/1995',
      phone: '678-901-2345',
      password: 'password6',
    },
    {
      username: 'user7',
      firstName: 'Eve',
      lastName: 'Davis',
      dob: '07/07/1996',
      phone: '789-012-3456',
      password: 'password7',
    },
    {
      username: 'user8',
      firstName: 'John',
      lastName: 'Cena',
      dob: '02/07/1890',
      phone: '789-012-3412',
      password: 'password8',
    },
    {
      username: 'user9',
      firstName: 'Randy',
      lastName: 'Ortan',
      dob: '01/01/1998',
      phone: '789-012-1256',
      password: 'password9',
    },
    {
      username: 'user10',
      firstName: 'Undertaker',
      lastName: 'Ghost',
      dob: '01/06/11950',
      phone: '789-012-3888',
      password: 'password10',
    },
    {
      username: 'user11',
      firstName: 'Narender',
      lastName: 'Modi',
      dob: '23/05/1994',
      phone: '789-012-1111',
      password: 'password11',
    }
  ];


  const ChangePassword = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
    };

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Select username:</label>
        <select
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        >
          <option value="">--Select a username--</option>
          {data.map((user) => (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          placeholder='Change Password'
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  const [numEntriesToShow, setNumEntriesToShow] = useState(5);
  const handleShowAllClick = () => {
    if (numEntriesToShow === data.length) {
      setNumEntriesToShow(5);
    } else {
      setNumEntriesToShow(data.length);
    }
  };
  return (
    <div className='UsersData'>
      <div className='UsersDataTable'>
        <h2>Users Data</h2>
        <div className='UsersDataTableContainer'>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, numEntriesToShow).map((user) => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dob}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.length > 5 && (
          <button onClick={handleShowAllClick}>
            {numEntriesToShow === data.length ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>
      <div className='ChangePasswordFields'>
        <h2>Change User Password</h2>
        <ChangePassword />
      </div>
    </div>
  );
};

export default UsersData;