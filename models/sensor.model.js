const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensorSchema = new Schema({
  sensorName: { type: String, unique: true},
  sensorTemperature: { type: String},
  sensorStatus: { type: String},
}, {
  timestamps: true,
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;