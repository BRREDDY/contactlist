const express = require('express');
const router = express.Router();

//retrieving contact
router.get('/contacts', (req,res,next)=>{
    res.send('Retrieving the contact list');
});

//add contact 
router.post('/contact',(req,res,next)=>{

    //logic to add contact

});

//delete contact 
router.delete('/contact/:id',(req,res,next)=>{

    //logic to add contact
    
});


module.exports = router;

