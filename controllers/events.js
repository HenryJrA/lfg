
import { Event } from "../models/event.js"
import axios from 'axios'

export {
  index,
  deleteEvent,
  show,
  update,
  editEvent as edit,
  createEvent
}

function editEvent(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .populate('host')
  .then(event => {
    res.json(event)
  })
}

function update(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(event => {
    res.json(event)
  })
}

function index(req, res) {
  Event.find({})
  .populate('host')
  .populate('attendees')
  .then(events => {
    res.json(events)
  })
}

function show(req, res) {
  Event.findById(req.params.id)
  .populate('host')
  .populate({
    path: 'comments',
    populate: {
      path: 'author'
    }
  })
  .populate({
    path: "comments",
    populate: {
       path: "replies",
       populate: {
         path: "author"
      }
    }
  })
  .then(event => {
    res.json(event)
  })
}

function createEvent(req, res) {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}&key=${process.env.GEOCODING_API}`)
  .then(response => {
    
    req.body.host = req.user.profile
    Event.create(req.body)
    .then(event => {
      res.json(event, )
    })
  })
}

function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id)
  .then((event) => {
    res.json(event)
  })
}