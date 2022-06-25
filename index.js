// const http=require('http'); 
// //const express=require('express');  
// //const path = require('path');
// //console.log(__dirname);
// const port=9000;  // port no 
// //const app=express();  // automatic request handler hota h by default


// // app.set('view engine','ejs');

// //🙌 app.set('views', path.join(__dirname,'views'));
// // app.get('/home',function(req,res){
// //     console.log(req.url);
// //     res.render('home',{title:"my contact list home"});
// // })


// // app.get('/practice',function(req,res){
// //     console.log(req.url);
// //     res.render('practice',{title:"my practice"});
// // })


// // app.get('/',function(req,res){
// //     res.send("<h1>hey i m express and you ..... <h1>");
// // })


// 🙌function requesthandler(req,res){  // it is the reponse by browser to your request
//     console.log(req.url);
//     res.end("hey!! kya hal chal");
// }


//🙌 const server=http.createServer(requesthandler); // creates the serber on browser and respond by inner function


//🙌 server.listen(port); // listens to the server on (browser) request 

// // app.listen(port,function(Err){
// //     if(Err){
// //         console.log('Err',Err);
// //     }

// //     console.log("express server is runing...  ",port);
// // })


const http=require('http')

// 🙌😍🤷‍♀️ this is to require our mongo databse in our file like an library 
const db=require('./config/mongoose.js');

// 🎯🤷‍♀️ see this is used to acquire💁 our models file which is actually giving a blue print🫵 of how our data is stored in one cup🥸
const contact=require('./models/contact.js');

// 🎯🤷‍♀️ see this is 💁 used to acuire express🫵🥸
const express=require('express');
const app=express();

const path=require('path');
const { url } = require('inspector');
const { urlencoded } = require('express');
app.set('view engine','ejs');
//➡️🤨 dekh views isme necessary hota h ye folder name nhi hota template engine ka view hota h =>jb apn dirname krte h tb folder name hota okkk
app.set('views',path.join(__dirname,'views-engine'));

// it is a middileware for accessing the detils which we have submitted in form and that will be encoded in req.body
app.use(express.urlencoded());

// it is a middleware for the accessing of the stataic files of assets folder
app.use(express.static('assets'));
const port=9000 ;

//🫡🤨 this res.end se apn response le paa rhe h browser se 
// function requestHandler(req,res){
//     console.log(req.url);
//     res.end("hey this is garima ...");
// }

// // 🫡🤨is se apn server bnate h with http request or jo bhi browser pr request or response deta h uso requesthandler function hadle krat 
// const server=http.createServer(requestHandler);

// // 🫡🤨is se apna server h vo respond krta h browser me load hone ke baad
// server.listen(port,function(err){
//     if(err)
//     {
//         console.log("error occured ...",err);
//     }

//     console.log("my server is runing....",port);
// })



//❤️❤️❤️😍  ab apn contact list app vala kaam kr rhe h okk!!!

// var contactList=[
//     {
//         name:"garima",
//         phone:"12354567"
//     },
//     {
//         name:"alka",
//         phone:"34656789"
//     },
//     {
//         name:"ekta",
//         phone:"5667800000"
//     }

// ]


//🫡🤨 is function ke through apn expresss se req and response ko handle krte h when the route matches to first argument 
app.get('/',function(req,res){
    // res.send("<h1>hey garima here </h1>")
    res.render('home')
    console.log("yup.. my express is runing!!");
})


// is ke through we rae rendering/display  our contact by requested url

// app.get('/contact',function(req,res){
//     res.render('profile',{tittle:"contactListApp",
//                            contact:contactList});


   
// })




// ⬆️🎯⬆️yrr dekh iss file me error a rgi h jo rectify nhi ho rhi so apn ne profile vali file bnayi h 


app.get('/profile', function(req,res){


    contact.find({},function(err,contact){
            if(err){
                console.log("error in fetching and displaying it to the user");
                return ;
            }
          //  contactList.push(contact )
    return res.render('profile',{

        tittle:"contactListApp",
        contact:contact
    })


    
})



app.post('/create-contact',function(req,res){
  //  console.log(req.url);

  // in this cname and cphone are not there in our contactlist array so they are not able fetch require fields and we have to specify these keys

//   contactList.push({
//     name:req.body.cname,
//     phone:req.body.cphone 
//   });
//   console.log(req.body);

   contact.create({
    name:req.body.cname ,
    phone:req.body.cphone
   },function(err,newcontact){
    if(err)
    {
        console.log("error in sending the data to our mongoDB...",err);
        return ;
    }

    // contactList.push(newcontact)
    console.log("******... ", newcontact);
  return res.redirect('back');
})

   })

//🤔😶‍🌫️ye mene apna tareeka lgaya ki agr me add krte wqt he 😒 apni list ko reneder kr lyuu😡 but fir ussi me uljh gyi or koi solution nhi sirf sir wal he apply krna pdega👩‍⚖️

//    contact.find({},function(err,contact){
//     if(err){
//         console.log("error in fetching and displaying it to the user");
//         return ;
//     }
    // contactList.push(contact )


    // contactList.push({
    //     name:req.body.cname ,
    //     phone:req.body.cphone
    // });
    // return res.render('profile',{
    //     tittle:"Contact-List",
    //     contact:contact
    // })
})

       

//🫡🤨 this is to handle the delete of contact

app.get('/delete-contact/',function(req,res){

    // 😎🤷‍♀️🤷‍♀️💕see it is a param handling method on click of delete anchor tag isme jo apn uper url me :phone bhej rhe h uski request ja rhi h or handle ho rhi h
    
// console.log(req.params);
// let phone=req.params.phone;
// console.log(phone);

// res.redirect('back');
    // 😎🤷‍♀️🤷‍♀️ see ye query params he isme apne ko variables nhi bhejne hote direct delete-contact/ yhi format hota h
    // this is when we have static contactlist\\

            // console.log(req.query)
            // let =req.query.phone

            // let contactIdx=contactList.findIndex(contact=>contact.phone==phone);
            // if(contactIdx!=-1){
            //     contactList.splice(contactIdx,1);
            // }
            // res.redirect('back')

    // this is when  😎🤷‍♀️ we use db and params to delete
    
    let id=req.query.id;
    contact.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log("error in deleting data from DB");
            return ;
        }
        return res.redirect('back');
    })
})




// 🫡🤨see is function ke through apn server run kr skte h   
app.listen(port, function(err){

    if(err)
    {
        console.log("error occured ..",err);
    }

    console.log("my express server is runing....",port);

})

// 🙌😎😯 dekh jb bhi apn koi server bnate h to important cheej =>1)port by defualt ye 3000 hota h 
//2) fir sbse important http serber hota jis se apn browser pr run kr pate h okkk
//3) fir agr apn sirf node.js ke through apna server create kr rhe h to to sbs pehele a)create server krte h 
//=>b)create server ke function me (req,res) hota h 
//=> c)fir create krne ke baad apn us server ko listen krte ➡️mtlb apn usko browser pr aayi hui request ko handle krte h 
// 4) 🙌agr apn express ke through apne server ko bna rhe h to apne ko sbse pehle express ko require krna pdega 
//a) express ki sari functionalities ko and libraries ko apn app ke through ya fir kisi bhi variable ke through le lenge 🙌
//b)then apn get function ke through route or browser ke req and res ko handle😎 krenge
//c) and at last apn app.listen krenge us port or function(err) ke sath 😎





