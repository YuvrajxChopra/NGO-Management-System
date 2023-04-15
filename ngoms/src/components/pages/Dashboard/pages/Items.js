import React, { useState } from 'react';
import './Items.css';

function ItemDonationForm() {
  const [donorName, setDonorName] = useState('');
  const [donationTo, setDonationTo] = useState('');
  const [donationItem, setDonationItem] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // send form data to server or API
    console.log('Donor Name:', donorName);
    console.log('Donation To:', donationTo);
    console.log('Donation Item:', donationItem);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zip Code:', zipCode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donor Name:
        <input type="text" value={donorName} onChange={(event) => setDonorName(event.target.value)} required />
      </label>
      <br />
      <label>
        Donation To:
        <input type="text" value={donationTo} onChange={(event) => setDonationTo(event.target.value)} required />
      </label>
      <br />
      <label>
        Item:
        <input type="text" value={donationItem} onChange={(event) => setDonationItem(event.target.value)} required />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} required />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} required />
      </label>
      <br />
      <label>
        State:
        <input type="text" value={state} onChange={(event) => setState(event.target.value)} required />
      </label>
      <br />
      <label>
        Zip Code:
        <input type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)} required />
      </label>
      <br />
      <button type="submit">Donate</button>
    </form>
  );
}
const charities = [
  {
    id: 1,
    name: 'Charity A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum nulla. Donec sit amet lacinia mauris.',
    donationLink: 'http://localhost:3000/Dashboard/Items',
    image: 'https://via.placeholder.com/150x150.png?text=Charity+A',
    urgent: true
  },
  {
    id: 2,
    name: 'Charity B',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in bibendum nulla. Donec sit amet lacinia mauris.',
    donationLink: 'http://localhost:3000/Dashboard/Items',
    image: 'https://via.placeholder.com/150x150.png?text=Charity+A',
    urgent: true
  }
];

const CharityUrgentHelp = () => {
  const urgentCharities = charities.filter(charity => charity.urgent);
  
  return (
    <div className="CharityUrgentHelp">
      <h2>Charities In Urgent Need Of Help</h2>
      <ul>
        {urgentCharities.map(charity => (
          <li key={charity.id}>
            
            <div>
              <h3>{charity.name}</h3>
              <p>{charity.description}</p>
              <a href={charity.donationLink}>Donate now</a>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

function DonationAwards() {
  return (
    <div className='DonationAwards'>
      <h2>Awards for Donations Given</h2>
      <div className='AwardCard'>
        <img src='https://pngimg.com/uploads/award/award_PNG22.png' alt='Award 1' />
        <h3>Award Title 1</h3>
        <p>Most helpful person of 2023 for donations.</p>
      </div>
    </div>
  );
}
function Items() {
  return (
    <>
    <h1 style={{"textAlign": "center"}}>Item Donation</h1>
    <div className='Items'>
      <ItemDonationForm/>
      <CharityUrgentHelp />
      <h2>No Previous Donation</h2>
      <DonationAwards />
      
    </div>
    </>
    
  );
}

export default Items;