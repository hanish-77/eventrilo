import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEvent = { name, date, description };
        await axios.post('http://localhost:5000/events', newEvent);
        setName('');
        setDate('');
        setDescription('');
    };

    return (
        <div>
            <h1>Create Event</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Event Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <textarea
                    placeholder="Event Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default CreateEvent;
