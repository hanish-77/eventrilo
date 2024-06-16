import React from 'react';

const Event = ({ event }) => {
    return (
        <div>
            <h2>{event.name}</h2>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
        </div>
    );
};

export default Event;
