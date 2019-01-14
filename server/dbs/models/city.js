import mongoose from 'mongoose'
const Scheme = mongoose.Schema

const CitySchema = new Scheme({
  id: {
    type: String,
    required: true
  },
  value: {
    type: Array,
    required: true
  }
})

export default mongoose.model('City', CitySchema)