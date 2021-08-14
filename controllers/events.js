import { Event } from "../models/Event.js"

export {
  index
}

function index(req, res) {
  Event.find({})
  .then(events => {
    res.json(events)
  })
}