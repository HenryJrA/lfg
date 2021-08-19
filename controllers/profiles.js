import { Profile } from "../models/profile.js"

export {
  userProfile,
  index,
  editProfile as edit,
  update,
  joinEvent,
  leaveEvent
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.json(profile)
  })
}

function editProfile(req, res) {
  Profile.findById(req.params.id)
  .populate('host')
  .then(profile => {
    res.json(profile)
  })
}

function index(req, res) {
  Profile.find({})
  .populate('media')
  .populate('friends')
  .then(profiles => {
    res.json(profiles)
  })
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .populate('media')
  .populate('friends')
  .then(profile => {
    res.json(profile)
  })
}

function joinEvent(req, res) {
  Profile.findById(req.user.profile)
  .populate('events')
  .then(profile => {
    profile.events.push(req.params.id)
  profile.save()
  .then(()=> res.json(profile))
  })

 }

 function leaveEvent(req, res) {
  Profile.findById(req.user.profile)
  .populate('events')
  .then(profile => {
    profile.events.remove(req.params.id)
  profile.save()
  .then(()=> res.json(profile))
  })

 }