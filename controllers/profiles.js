import { Profile } from "../models/profile.js"

export {
  userProfile,
  index
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