const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://hazemdr:hazem2024H@stack.3hkee.mongodb.net/?retryWrites=true&w=majority&appName=stack')
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

