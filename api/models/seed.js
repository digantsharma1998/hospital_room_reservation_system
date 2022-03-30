const Room = require('./Room')

Room.create([
  {
    name: 'Normal Room',
    floor: '8',
    capacity: 50,
    assets: {
      FlatBed: true,
      NormalMasks: true
    }
  },
  {
    name: 'Oxygen Rooms',
    floor: '8',
    capacity: 50,
    assets: {
      OxygenCylinders: true,
      ReclinerBed: true,
      NonRebreatherMasks: true
    }
  },
  {
    name: 'ICU',
    floor: '8',
    capacity: 20,
    assets: {
      Ventilator: true,
      ReclinerBed: true,
      OxygenCylinders: true
    }
  }
])
  .then((rooms) => {
    console.log(`Created ${rooms.length} rooms.`)
  })
  .catch((error) => {
    console.error(error)
  })