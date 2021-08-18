import { Profile } from "../models/profile.js"

export {
  userProfile,
  index,
  editProfile as edit,
  update
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.body._id, req.body, {new: true})
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