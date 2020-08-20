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

module.exports = {AdminLoginCheck}