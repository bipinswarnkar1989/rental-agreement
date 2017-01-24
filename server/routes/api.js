"use strict";
// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://localhost/rental-agreement';
const dbHost = 'mongodb://bipinswarn:bipinswarn@ds127439.mlab.com:27439/heroku_130w5s9k';
// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const agreementSchema = new mongoose.Schema({
  tenant_name:{
    type:String,
    required:'Name cannot be left blank'
  },
  tenant_fathers_name:String,
  tenant_mobile:{
    type:Number,
    required:'Mobile cannot be left blank'
  },
  tenant_address:{
    type:String,
    required:'Address cannot be left blank'
  },
  owner_name:{
    type:String,
    required:'Name cannot be left blank'
  },
  owner_fathers_name:String,
  owner_mobile:{
    type:Number,
    required:'Mobile cannot be left blank'
  },
  owner_address:{
    type:String,
    required:'Address cannot be left blank'
  },
  monthly_rent:{
    type:Number,
    required:'Monthly rent amoount cannot be left blank'
  },
  security_deposit:{
    type:Number,
    required:'Monthly rent amoount cannot be left blank'
  },
  renting_date:{
    type:Date
  },
  lease_period:{
    type :String,
    required:'Lease period is required'
  },
  created:{
		type:Date,
		default:Date.now
	}


});

// create mongoose model
const Agreement = mongoose.model('Agreement', agreementSchema);



/* GET all users. */
router.get('/agreement', (req, res) => {
	Agreement.find({}, (err, agmt) => {
		if (err) return res.status(500).json(err)

		res.status(200).json(agmt);
	});
});

/* GET one users. */
router.get('/agreement/:id', (req, res) => {
	Agreement.findById(req.params.id, (err, agmt) => {
		if (err) return res.status(500).json(err)
    console.log(req.params.id);
		res.status(200).json(agmt);
	});
});

/* GET one users. */
router.delete('/agreement/:id', (req, res) => {
	Agreement.findById(req.params.id, (err, agmt) => {
		if (err) return res.status(500).json(err)
    agmt.remove((err,agmt) => {
      	if (err) return res.status(500).json(err);

      console.log(req.params.id);
      res.status(200).json({message:'Agreement deleted successfully'});
    });

	});
});

/* GET one users. */
router.put('/agreement/:id', (req, res) => {
	Agreement.findById(req.params.id, (err, agmt) => {
		if (err) return res.status(500).json(err)
    console.log(agmt);
    agmt.tenant_name = req.body.tenant_name;
    agmt.tenant_fathers_name = req.body.tenant_fathers_name;
    agmt.tenant_mobile = req.body.tenant_mobile;
    agmt.tenant_address = req.body.tenant_address;
    agmt.owner_name = req.body.owner_name;
    agmt.owner_fathers_name = req.body.owner_fathers_name;
    agmt.owner_mobile = req.body.owner_mobile;
    agmt.owner_address = req.body.owner_address;
    agmt.monthly_rent = req.body.monthly_rent;
    agmt.security_deposit = req.body.security_deposit;
    agmt.renting_date = req.body.renting_date;
    agmt.lease_period = req.body.lease_period;
    agmt.save((err) => {
      	if (err) return res.status(500).json(err);

      console.log(req.params.id);
      res.status(200).json({message:'Agreement updated successfully'});
    });

	});
});

/* Create a user. */
router.post('/agreement', (req, res) => {
	let agreement = new Agreement(req.body);
  console.log(req.body);
	agreement.save(error => {
		if (error) return res.status(500).json(error);

		res.status(201).json({
			message: 'Agreement created successfully'
		});
	});
});

module.exports = router;
