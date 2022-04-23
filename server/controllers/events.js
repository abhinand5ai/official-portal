const Event = require('../models/events.js');

export const getEvents = (req, res) => {
  Event.find({}, (err, events) => {
    if (err) {
      res.send(err);
      console.log(`Error fetching events: ${err}`);
    }
    res.json(events);
  });
};

export const getEventById = (req, res) => {
  // TODO: Implement
  Event.findById(req.params.eventId, (err, event) => {
    if (err) {
      res.send(err);
      console.log(`Error fetching event: ${err}`);
    }
    res.json(event);
  });
};
export const getUpcomingEvents = (req, res) => {
  // TODO: get upcoming events
  Event.find({}, (err, events) => {
    if (err) {
      res.send(err);
      console.log(`Error fetching events: ${err}`);
    }
    res.json(events);
  });
};

export const createEvent = async (req, res) => {
  const event = new Event();
  event.name = req.body.name;
  event.description = req.body.description;
  event.start_time = new Date(req.body.start_time);
  event.end_time = new Date(req.body.end_time);
  event.location = req.body.location;
  try {
    const savedEvent = await event.save();
    res.json(savedEvent);
    console.log(`Event ${savedEvent._id} created successfully`);
  } catch (err) {
    res.send(err);
    console.log(`Error creating event ${err}`);
  }
};
