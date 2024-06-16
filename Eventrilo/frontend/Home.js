import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from '../components/Event';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('http://localhost:5000/events');
            setEvents(res.data);
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Event List</h1>
            {events.map(event => (
                <Event key={event._id} event={event} />
            ))}
        </div>
    );
};

export default Home;
