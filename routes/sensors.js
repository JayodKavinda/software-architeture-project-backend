const router = require('express').Router();
let Sensor = require('../models/sensor.model');

router.route('/').get((req, res) => {
  Sensor.find()
    .then(sensors => res.json(sensors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const sensorName = req.body.sensorName;
  const sensorTemperature = req.body.sensorTemperature;
  const sensorStatus = req.body.sensorStatus;

  const newSensor = new Sensor({
    sensorName,
    sensorTemperature,
    sensorStatus,
  });

  newSensor.save()
  .then(() => res.json('Sensor added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;