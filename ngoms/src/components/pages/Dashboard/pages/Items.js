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
        <input type="text" placeholder="Donor Name" value={donorName} onChange={(event) => setDonorName(event.target.value)} required />
      </label>
      <br />
      <label>
        <select name="donateto" placeholder='Donate To' onChange={(event) => setDonationTo(event.target.value)} required>
          <option value="Charity A">Charity A</option>
          <option value="Charity B">Charity B</option>
        </select>
        </label>
      <br />
      <label>
        <input type="text" value={donationItem} placeholder="Items" onChange={(event) => setDonationItem(event.target.value)} required />
      </label>
      <br />
      <label>
        <input type="date" value={dateOfBirth} placeholder="Date Of Birth" onChange={(event) => setDateOfBirth(event.target.value)} required />
      </label>
      <br />
      <label>
        <input type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <br />
      <label>
        <input type="tel" value={phone} placeholder="Phone number" onChange={(event) => setPhone(event.target.value)} required />
      </label>
      <br />
      <label>
        <input type="text" value={address}  placeholder="Address" onChange={(event) => setAddress(event.target.value)} required />
      </label>
      <br />
      <label>
        <input type="text" value={city} placeholder="City" onChange={(event) => setCity(event.target.value)} required />
      </label>
      <br />
      <label>
        <input type="text" value={state} placeholder="State" onChange={(event) => setState(event.target.value)} required />
      </label>
      <br />
      <label>
        <input type="text" value={zipCode} placeholder="Zip code" onChange={(event) => setZipCode(event.target.value)} required />
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
      <h2 style={{ "color": "#1c2237" }}>Charities In Urgent Need Of Help</h2>
      <ul>
        {urgentCharities.map(charity => (
          <li key={charity.id}>
            
            <div>
              <h3>{charity.name}</h3>
              <p>{charity.description}</p>
              <a href={charity.donationLink}>Donate now!!</a>
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
    <h1 style={{"textAlign": "center", "color": "#1c2237"}}>ITEM DONATION</h1>
    <div className='Itemss'>
      <div>
        <CharityUrgentHelp />
      </div>
      <div>
        <h2 style={{"textAlign": "center", "color": "#1c2237"}}>DONATE NOW!</h2>
        <ItemDonationForm/>
      </div>
    </div>
    </>
    
  );
}

export default Items;