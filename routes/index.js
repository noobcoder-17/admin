var express = require('express');
var adminController = require('../controllers/admincontroller');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('home',{title: 'THIS IS HOME PAGE.'});
});

router.get('/login', function(req, res, next) {
    res.render('./adminpart/adminlogin');
});
router.post('/adminlogincheck', adminController.AdminLoginCheck);

router.get('/adminhome', function(req, res, next) {
    res.render('./adminpart/adminhome');
});

router.get('/adminaddproduct', function(req, res, next) {
    res.render('./adminpart/productadd');
});

router.post('/AdminAddProduct' , adminController.AdminAddProduct);

router.get('/adminvieworder', function(req, res, next) {
    res.render('./adminpart/adminvieworder');
});
module.exports = router;