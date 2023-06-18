import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './CreateEvents.css';

function CreateEvents() {
  return (
    <div className='CreateEventsMainContainer'>
      <div className='UploadEventForm'>
        <h2> Create Events </h2>
        <UploadEvent/>
      </div>
      <div className='EventsList'>
        <EventList/>
      </div>
    </div>
  );
}

function EventList() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' },
  ]);

  const handleDeleteClick = (event) => {
    const updatedEvents = events.filter((e) => e.id !== event.id);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h2>EVENTS</h2>
      <ul style={{listStyle:  'none'}}>
        {events.map((event) => (
          <li className='listofevent' key={event.id}>
            <span className='eventlisttittle' id='eventlisttittle' >{event.title}</span>
            <span className="icon" onClick={() => handleDeleteClick(event)}>
              <FaTrashAlt />
            </span> 
          </li>
        ))}
      </ul>
    </div>
  );
}

function UploadEvent() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(file);
    setFile(selectedFile);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFile(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image-upload">Upload an Image:</label>
        <input type="file" id="image-upload" onChange={handleFileChange} accept="image/*" />
        <br/>
        <label htmlFor="image-upload">Title of Event:</label>
        <input type='text' placeholder='Enter the title of the Event' name='eventtittle'/>
      </div>
      <div>
        <textarea id="description" value={description} onChange={handleDescriptionChange} rows={8} cols={100} placeholder='Write event description'/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}


export default CreateEvents;