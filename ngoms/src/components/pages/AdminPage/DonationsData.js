import React, { useState } from 'react';

function DonationsData() {
    const data = [
      {
        donationid: 'm12345',
        username: 'user1',
        fullname: 'John Doe',
        date: '01/01/1990',
        amount: '50,000',
        donatedto: 'GODs work charity'
      },
      {
        donationid: 'm12346',
        username: 'user4',
        fullname: 'Alice Johnson',
        date: '01/01/1990',
        amount: '10,000',
        donatedto: 'GODs work charity'
      },
      {
        donationid: 'm12347',
        username: 'user7',
        fullname: 'Eve Davis',
        date: '01/01/1990',
        amount: '15,000',
        donatedto: 'Charity School'
      }
    ];
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
          <h2>Donations Data</h2>
          <div className='UsersDataTableContainer'>
            <table>
              <thead>
                <tr>
                  <th>DonationID</th>
                  <th>Username</th>
                  <th>Fullname</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Donated To</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, numEntriesToShow).map((user) => (
                  <tr key={user.donationid}>
                    <td>{user.donationid}</td>
                    <td>{user.username}</td>
                    <td>{user.fullname}</td>
                    <td>{user.date}</td>
                    <td>{user.amount}</td>
                    <td>{user.donatedto}</td>
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
      </div>
  );
}

export default DonationsData;
