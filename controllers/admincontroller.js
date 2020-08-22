var firebase = require('firebase');

var fire = firebase.initializeApp({
   apiKey: "AIzaSyB0M8Qrwze4wrkRKz6NBZQ5N4ZeVMzsCCU",
   authDomain: "groceryapp-dbf52.firebaseapp.com",
   databaseURL: "https://groceryapp-dbf52.firebaseio.com",
   projectId: "groceryapp-dbf52",
   storageBucket: "groceryapp-dbf52.appspot.com",
   messagingSenderId: "1019129350835",
   appId: "1:1019129350835:web:3e906efe26a991f1747ec6",
   measurementId: "G-0W3P8WERJT"
 });

 //FIREBASE ADD PRODUCT
 const AdminAddProduct = (req, res) =>
 {
    var database=fire.database();
    var productname=req.body.pname;
    var productdes=req.body.pdes;
    var productprice=req.body.price;
    var producturl=req.body.purl;
    var productcat=req.body.pcat;
    fire.database().ref('product' + "vbnnmm,,").set({
      productname: productname,
      productprice: productprice,
      productdes: productdes,
      producturl: producturl,
      productcat: productcat
    });
    res.redirect('/adminhome');
 }

//ADMIN LOGIN
const AdminLoginCheck = ( req, res ) => 
   {
    var username = req.body.adminusername;
    var password = req.body.adminpassword;
     console.log("ADMIN USER NAME " + username);
     console.log("ADMIN PASSWORD " + password);

     if((username === 'admin') && (password === 'admin'))
        res.redirect('/adminhome');
     else
        res.render('./adminpart/adminlogin',{hasadminnotloggedin : true});
     
    };

module.exports = {AdminLoginCheck , AdminAddProduct}