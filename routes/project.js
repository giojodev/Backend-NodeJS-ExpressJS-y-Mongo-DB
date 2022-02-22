'use strict'

var express=require('express');
const { route } = require('../app');

var projectController=require('../controllers/project');

var router=express.Router();

router.get('/home',projectController.home);
router.post('/test',projectController.test);
router.post('/save-project',projectController.saveProject);
router.get('/project/:id?',projectController.getProject);

module.exports=router;