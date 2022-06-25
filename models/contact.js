
// 🎯🤷‍♀️  this is we are acquiring mongoose and in this nodejs is efficient that in our index.js it will require mongoose for the first file😎🤨and that will be distributed to everone w/o extra storage
const mongoose=require('mongoose');

// 🎯🤷‍♀️ this is to defone the scemma
const contact_schema=new mongoose.Schema({    // collection

    // it is field
    name:{
         type:String ,
         required:true
    },

    phone:{
        type:String,
        required:true
    }
});

// 🎯🤷‍♀️💁🫵🥸 now the most important one ab tk apn ne sirf controller ke function (res.req) dekhi or views se template engine  but now we are connecting our routes to models which will automatically connect sb cheez to db
const Contacts=mongoose.model('Contacts',contact_schema);

// 💁🫵🥸 this module will exports the contacts which we gathered from our db 
module.exports=Contacts;