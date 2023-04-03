import React from 'react';
import HomeComponent1 from './HomeComponent1';
import HomeComponent2 from './HomeComponent2';
import Events, { EventsItem } from './Events'
import Footer from '../../Footer';
import Contact from './Contact';
import './CSS/Home.css';


function Home() {
  return (
    <div>
        <HomeComponent1 />
        <HomeComponent2 />,
        <Events>
          <EventsItem>1</EventsItem>
          <EventsItem>2</EventsItem>
          <EventsItem>3</EventsItem>
        </Events>,
        <Contact />,
        <Footer />
    </div>
  );
}

export default Home