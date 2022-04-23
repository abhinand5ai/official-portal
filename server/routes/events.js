const {getEvents, createEvent} = require('../controllers/events.js');

const express = require('express');

const router = express.Router;

router.get('/', getEvents);

router.post('/', createEvent);

export default router;
