import { Event } from "../models/event.js"

export {
  index,
  deleteEvent,
  show
  // addEvent
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

// function addEvent(req, res) {
//   req.body.host = req.user.profile
//   Event.findById(req.user.profile)

// }

function deleteEvent(req, res) {
  Event.findByIdAndDelete(req.params.id)
  .then((event) => {
    res.json(event)
  })
}