const express = require('express');
const router = express.Router();

// require the Drone model here

  router.get('/drones',(req, res, next)=> {
    Drone.find()
        .then(data =>{
            /* console.log('the drones!!',data) */
            const moviesInfo = data
            res.render('drones',{dronesList})
        })


        .catch(err => console.error(err))})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
