const express=require('express')

const router=express.Router()

const homeController=require('../controllers/home_controller')
const test=require('../controllers/test')

console.log('router is running')
router.get('/',homeController.home);
router.get('/test',test.practice)

module.exports =router;
