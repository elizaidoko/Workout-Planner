/* GET 'Add generalHealth' page */
const general = function(req, res){
    res.render('index', { title: 'SWIFTYACTIVE',
    imageLocation: 'images/generalHealth.jpeg',
    click: 'Click Me',
    exerciseHeaders: [{
      nameCol: 'Exercise',
      warmUpCol: 'Warm-Up Sets',
      setsCol: 'Sets',
      repsCol: 'Reps',
      repMaxCol: '%1RM',
      restCol: 'Rest',
      demoCol: 'Demo'
    }],
    exercises: [{
          name: 'Barbell Bench Press',
          warmUpSets: 3,
          sets: 3,
          reps: 12,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/rT7DgCr-3pg'
      }, {
          name: 'Thrusters',
          warmUpSets: 3,
          sets: 3,
          reps: 10,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/Zvt5-mugUco'
      }, {
          name: 'Jumping Squats',
          warmUpSets: 3,
          sets: 3,
          reps: 12,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/A-cFYWvaHr0'
      }, {
          name: 'Pull Ups',
          warmUpSets: 3,
          sets: 3,
          reps: 10,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/A-cFYWvaHr0'
      }, {        
          name: 'Mountain Climbers',
          warmUpSets: 3,
          sets: 3,
          reps: 10,
          repMax: 70,
          rest: '1-2 min',
          demo: 'https://youtu.be/ZhiCSdOVJp0'
      }, {        
          name: 'Jumping Jacks',
          warmUpSets: 3,
          sets: 3,
          reps: 12,
          repMax: 60,
          rest: '1-2 min',
          demo: 'https://youtu.be/1b98WrRrmUs'
      }]
    });
  };

  const loseWeight = function(req, res){
    res.render('index', { title: 'SWIFTYACTIVE',
    imageLocation: 'images/loseWeight.jpeg',
    click: 'Click Me',
    exerciseHeaders: [{
      nameCol: 'Exercise',
      warmUpCol: 'Warm-Up Sets',
      setsCol: 'Sets',
      repsCol: 'Reps',
      repMaxCol: '%1RM',
      restCol: 'Rest',
      demoCol: 'Demo'
    }],
    exercises: [{
          name: 'Push-ups',
          warmUpSets: 2,
          sets: 3,
          reps: 15,
          repMax: '80%',
          rest: '1-2 min',
          demo: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
      }, {
          name: 'Jumping Jacks',
          warmUpSets: 'NA',
          sets: 3,
          reps: 30,
          repMax: '60%',
          rest: '1-2 min',
          demo: 'https://youtu.be/1b98WrRrmUs'
      }, {
          name: 'Russian Twist',
          warmUpSets: 3,
          sets: 3,
          reps: 12,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/A-cFYWvaHr0'
      }, {
          name: 'Squat Thrusts',
          warmUpSets: 3,
          sets: 3,
          reps: 10,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/A-cFYWvaHr0'
      }, {        
          name: 'Mountain Climbers',
          warmUpSets: 3,
          sets: 3,
          reps: 10,
          repMax: 70,
          rest: '1-2 min',
          demo: 'https://youtu.be/ZhiCSdOVJp0'
      }]
    });
  };

  const buildMuscle = function(req, res){
    res.render('index', { title: 'SWIFTYACTIVE',
    imageLocation: 'images/buildMuscle.jpeg',
    click: 'Click Me',
    exerciseHeaders: [{
      nameCol: 'Exercise',
      warmUpCol: 'Warm-Up Sets',
      setsCol: 'Sets',
      repsCol: 'Reps',
      repMaxCol: '%1RM',
      restCol: 'Rest',
      demoCol: 'Demo'
    }],
    exercises: [{
          name: 'Push-ups',
          warmUpSets: 2,
          sets: 3,
          reps: 15,
          repMax: '80%',
          rest: '1-2 min',
          demo: 'https://www.youtube.com/watch?v=IODxDxX7oi4'
      }, {
          name: 'Jumping Jacks',
          warmUpSets: 'NA',
          sets: 3,
          reps: 30,
          repMax: '60%',
          rest: '1-2 min',
          demo: 'https://youtu.be/1b98WrRrmUs'
      }, {
          name: 'Russian Twist',
          warmUpSets: 3,
          sets: 3,
          reps: 12,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/A-cFYWvaHr0'
      }, {
          name: 'Squat Thrusts',
          warmUpSets: 3,
          sets: 3,
          reps: 10,
          repMax: 60,
          rest: '2-3 min',
          demo: 'https://youtu.be/A-cFYWvaHr0'
      }, {        
          name: 'Mountain Climbers',
          warmUpSets: 3,
          sets: 3,
          reps: 10,
          repMax: 70,
          rest: '1-2 min',
          demo: 'https://youtu.be/ZhiCSdOVJp0'
      }]
    });
  };


/*const generalHealth = function(req, res){ 
    res.render('generalHealth', { title: 'General Health' }); 
};*/

module.exports = { 
    general,
    loseWeight,
    buildMuscle
};
    

