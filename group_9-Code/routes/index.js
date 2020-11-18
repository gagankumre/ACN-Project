const User = require('../models/User');
const express = require('express');


const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

module.exports = function (app, io) {
    
	app.get('/public_chat',ensureAuthenticated, function(req,res){
		User.find({}, function(err, docs){
			if (err) throw err
			console.log(docs)
			res.render('public_chat', {
				user : req.user,
				user_list : docs
			})
		})
	})

	app.get('/', forwardAuthenticated, (req, res) => res.render('welcome'))

};