const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://livehazem:RUbzI1efhj24OCXt@meanapp.awewo.mongodb.net/?retryWrites=true&w=majority&appName=meanApp')
    .then(
        ()=>{
            console.log('connected');
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )

