const express = require('express');
const router = express.Router();
const User = require('../models/user');



router.post('/', async(req,res,next)=>{
    const { email,password } = req.body;
    User.findOne({email:email})
    .then((user)=>{
      if(user){
        if(user.password === password){
           console.log("Password matched and logged in")
        }else{
            console.log("Passwords did not match");
        }
      }
      else{
        console.log("No user exist on this email ID");
      }
    })

    try {
        const user = await User.findOne({ email });
    
        if (user) {
        //   console.log('User found:', user);
          res.json({ success: true, user:user });
        } else {
          console.log('User not found');
          res.json({ success: false, message: 'Invalid email' });
        }
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal Server error' });
      }








    // const email = req.body.email
    //  const user = await User.findOne({email:1})
     
    //  console.log(user.json());
    // //  res.send(user)
    // //  console.log(({email, password}))
    //  res.json({
    //     user:" Found "+ user
    //  })
    // const {email, password} = req.body

    // console.log({email, password})
  
    // const user = await User.findOne({email, password})

    // console.log(user)

    // if(user){
    //     res.send(user)
    //     res.json({success:true,message:"Logged in successfully"})
    // }
    // else{
    //     res.json({success:true,message:"Credentials does not match"})
    // }

})


module.exports = router