// 🎯🤷‍♀️ this is to require our databse mongoose ... u can take mongoose as the driver for mongo db it is intermmediate which sets an relation b/t your mongoDBand node.js
const mongoose=require('mongoose')


// 🎯🤷‍♀️ this is to set a connection b/w your browser and the mongo db server through the folder named contact-list-db
mongoose.connect('mongodb://localhost/contact-list-db');

// 🎯🤷‍♀️ this is to set that the connection which we have done in previous step is acquired by the db const variable just to make things simplee😍😎
const db=mongoose.connection;

// 🎯🤷‍♀️this is to display a message when any error occured in connectiong our index.js file and this mongoose.js file so we have used console.lo.error
db.on('error',console.error.bind(console,'error in connecting MongoDb'));

// 🎯🤷‍♀️this is display the message once we are successfully connected to mongoose file 
db.once('open',function(){
    console.log("successfully connected to MongoDb");
})