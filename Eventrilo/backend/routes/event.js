const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.json({ message: err });
    }
});

// Create a new event
router.post('/', async (req, res) => {
    const event = new Event({
        name: req.body.name,
        date: req.body.date,
        description: req.body.description
    });

    try {
        const savedEvent = await event.save();
        res.json(savedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a specific event
router.get('/:eventId', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.json(event);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete an event
router.delete('/:eventId', async (req, res) => {
    try {
        const removedEvent = await Event.remove({ _id: req.params.eventId });
        res.json(removedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

// Update an event
router.patch('/:eventId', async (req, res) => {
    try {
        const updatedEvent = await Event.updateOne(
            { _id: req.params.eventId },
            { $set: { name: req.body.name, date: req.body.date, description: req.body.description } }
        );
        res.json(updatedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
