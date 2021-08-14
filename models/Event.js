import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Event
}

const replySchema = new mongoose.Schema(
  {
    content: String,
    author: {type: Schema.Types.ObjectId, ref: "Profile"},
    comment: { type: Schema.Types.ObjectId, ref: "Comment"}
  }
)

const commentSchema = new mongoose.Schema(
  {
    author: {type: Schema.Types.ObjectId, ref: "Profile"},
    content: String,
    replies: [replySchema]
  },
  {
    timestamps: true,
  }
)

const eventSchema = new mongoose.Schema(
  {
    host: {type: Schema.Types.ObjectId, ref: "Profile"},
    address: String,
    comment: [commentSchema],
    center: String,
    position: String,
    zoom: Number,
    attendees: [{type: Schema.Types.ObjectId, ref: "Profile"}],
    date: {type: Date},
    time: {type: Date} 
  },
  {
    timestamps: true,
  }
)

const Event = mongoose.model('Event', eventSchema)