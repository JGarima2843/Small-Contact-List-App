
// π―π€·ββοΈ  this is we are acquiring mongoose and in this nodejs is efficient that in our index.js it will require mongoose for the first fileππ€¨and that will be distributed to everone w/o extra storage
const mongoose=require('mongoose');

// π―π€·ββοΈ this is to defone the scemma
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

// π―π€·ββοΈππ«΅π₯Έ now the most important one ab tk apn ne sirf controller ke function (res.req) dekhi or views se template engine  but now we are connecting our routes to models which will automatically connect sb cheez to db
const Contacts=mongoose.model('Contacts',contact_schema);

// ππ«΅π₯Έ this module will exports the contacts which we gathered from our db 
module.exports=Contacts;