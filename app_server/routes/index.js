const express = require('express');
const router = express.Router();

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:verysecureadminpassword@cluster0.prxtw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const ctrlMain = require('../controllers/main'); 
const ctrlOthers = require('../controllers/others');

/*router.get('/', ctrlMain.index);*/ 
router.get('/generalHealth', ctrlMain.general);
router.get('/loseWeight', ctrlMain.loseWeight);
router.get('/buildMuscle', ctrlMain.buildMuscle);
router.get('/login', ctrlOthers.login);
router.get('/register', ctrlOthers.register);
router.post('/register', function(req,res) {
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;
    var gender = req.body.inlineRadioOptions;
    var goal = req.body.goals;

    var data = {
        "fname": fname,
        "lname": lname,
        "email": email,
        "pword": password,
        "gender": gender,
        "option": goal
    }

    client.connect(err => {
        const collection = client.db("WorkoutPlannerSystem").collection("users");
        let results = collection.findOne({email: email});
        results.then(function(value){
            if(value)
                res.send("<script>alert('An account with this email address already exists. Please try again.'); window.location.href = '/register'; </script>");
             else{
                collection.insertOne(data);
                res.render('login', {
                    title: "Registration Successful - You may now login."
                });
            }
        });
    });
});
router.get('/about', ctrlOthers.about);

module.exports = router;