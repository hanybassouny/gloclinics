const express = require('express');
var path = require('path');
var mysql = require('mysql');
const request = require('request-promise');
var bodyParser = require('body-parser');
const accountSid = 'AC5de8aee665a64367ca2805f15196fa06';
const tuken = '4c489002b93adb4f1168425c4c52e8a1';
const client = require('twilio')(accountSid,tuken);
const app = express();
const admin = require('./routes/AdminControlPanel')
const cont = require('./routes/controller')
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'views'))); // to make css work and image to load
app.use(bodyParser())
app.use('/AdminControlPanel',admin)
app.use('/Controller',cont)

const port = process.env.PORT || 5000;
const callBack = 'https%3A%2F%2Fwww.monalizacenter.com%2FOnlinePayment%2FCheckOut'


//Copy and paste this code in your Backend
let crypto = require('crypto');
function generateKashierOrderHash(id,price) {
  const mid = 'MID-14306-802'; //your merchant id
  const amount = price; //eg: 22.00
  const currency = "EGP"; //eg: "EGP"
  const orderId = id; //eg: 99
  const secret = '0f517a23-2057-49ea-88b2-cbfa290f14ae';
  const path = `/?payment=${mid}.${orderId}.${amount}.${currency}`;

  const hash = crypto.createHmac('sha256', secret).update(path).digest('hex');
  return hash;
}
//The Result Hash for /?payment=mid-0-1.99.20.EGP with secret 11111 should result 606a8a1307d64caf4e2e9bb724738f115a8972c27eccb2a8acd9194c357e4bec

function uniqueID() {
    return Math.floor(Math.random() * Date.now())
    }




    


function insertInDB(Query) {
    con.query(Query, function (err, result) { 
        if(err) console.log(err) 

       
    
    });  
    
}
    




var con = mysql.createPool({
    host: "localhost",
  user: "root",
  password: "",
  database: "spa"
    });
// con.connect(function(err) {
//   if (err) throw err;
//  console.log("Connected!");
// });













function whatsappmsg( Name, service, DateTime , PaymentMethod)
{ 'Your SPA SHOP RECIVED NEW ORDER FROM '+Name+' code is {{2}}'
    client.messages.create({
        from:"whatsapp:+14155238886",
        to:"whatsapp:+201020249439",
        body:'Your shop received a new order from: '+Name+', on the following Date: '+DateTime+', with the service code : ('+service+'), and payment method: '+PaymentMethod
       }).then()
      
      
}







   
   


   

  

   app.post('/OnlinePayment/CheckOut',(req,res)=>{
    
    con.query( "SELECT Query FROM onlineid WHERE ID="+req.body.merchantOrderId, function (err, result, fields) {
        if (err) throw err;
        var q = result[0].Query.split("'")
        insertInDB(result[0].Query);
        //whatsappmsg(q[1],q[11],q[q.length-2],"Online Payment");
        
      });
      res.redirect('/Confirm')
    
    
   })
   app.post('/WeddingOrder',(req,res)=>{
    
    var name = req.body.client_name_wedding;
    var phoneNumber = req.body.client_phone_wedding;
    console.log(phoneNumber)
    var email = req.body.client_email_wedding
    var event = "زفاف"
    var temp  = req.body.wedding_package.split(',')
    var package = temp[1]
    var price = parseInt(temp[0])
    
    let today = new Date().toISOString().slice(0, 10)
    var paidamount = req.body.client_deposit_wedding
    var datee = req.body.wedding_day
    var extra = ""
    var addons
    var addonstemp = req.body.wedding_extra
    console.log(req.body)
    if(typeof addonstemp === 'string')
    {addons = [addonstemp]
    }
    else
    {addons = addonstemp}
    
    var extra = ""
    for(var i =0;i<addons.length;i++)
    { var helper = addons[i].split(",")
    price = price + parseInt(helper[0])
    extra = extra + helper[1]+"/ "
  
  
    }
    var Query = "INSERT INTO event VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + event + "', '" + package + "', '" + today + "', '" + paidamount+ "', '" + (parseInt(price)-parseInt(paidamount)) + "', '"+datee+"', '" + 0 + "', '" + price + "', '', '" +extra+"')";

    var h = uniqueID();
    var helper = '"'+Query+'"'
    var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
    insertInDB(QueryR)
    
    var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+paidamount.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,paidamount)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
    res.redirect(url)







   })

   app.post('/EngagementOrder',(req,res)=>{

    var name = req.body.client_name_engagement;
    var phoneNumber = req.body.client_phone_engagement;
    
    var email = req.body.client_email_engagement
    var event = "خطوبة"
    var temp  = req.body.engagement_package.split(',')
    
    var package = temp[1]
    var price = parseInt(temp[0])
    let today = new Date().toISOString().slice(0, 10)
    var paidamount = req.body.client_deposit_engagement
    var datee = req.body.engagement_day
    var extra = ""
    var addons
    var addonstemp = req.body.engagement_extra
    
    if(typeof addonstemp === 'string')
    {addons = [addonstemp]
    }
    else
    {addons = addonstemp}
    
    var extra = ""
    
    for(var i =0;i<addons.length;i++)
    { var helper = addons[i].split(",")
    price = price + parseInt(helper[0])
    extra = extra + helper[1]+"/ "
  
  
    }
    var Query = "INSERT INTO event VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + event + "', '" + package + "', '" + today + "', '" + paidamount+ "', '" + (parseInt(price)-parseInt(paidamount)) + "', '"+datee+"', '" + 0 + "', '" + price + "', '', '" +extra+"')";

    var h = uniqueID();
    var helper = '"'+Query+'"'
    var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
    insertInDB(QueryR)
    
    var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+paidamount.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,paidamount)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
    res.redirect(url)







   })
   app.post('/HennaOrder',(req,res)=>{

    var name = req.body.client_name_henna;
    var phoneNumber = req.body.client_phone_henna;
    
    var email = req.body.client_email_henna
    var event = "حنة"
    var temp  = req.body.henna_package.split(',')
    
    var package = temp[1]
    var price = parseInt(temp[0])
    let today = new Date().toISOString().slice(0, 10)
    var paidamount = req.body.client_deposit_henna
    var datee = req.body.henna_day
    var extra = ""
    var addons
    var addonstemp = req.body.henna_extra
    
    if(typeof addonstemp === 'string')
    {addons = [addonstemp]
    }
    else
    {addons = addonstemp}
    
    var extra = ""
    
    for(var i =0;i<addons.length;i++)
    { var helper = addons[i].split(",")
    price = price + parseInt(helper[0])
    extra = extra + helper[1]+"/ "
  
  
    }
    var Query = "INSERT INTO event VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + event + "', '" + package + "', '" + today + "', '" + paidamount+ "', '" + (parseInt(price)-parseInt(paidamount)) + "', '"+datee+"', '" + 0 + "', '" + price + "', '', '" +extra+"')";
console.log(Query)
    var h = uniqueID();
    var helper = '"'+Query+'"'
    var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
    insertInDB(QueryR)
    
    var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+paidamount.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,paidamount)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
    res.redirect(url)







   })
   

   



app.post('/MasksOrder',(req,res)=>{
    var servicesh = req.body.masks_services;
    var services
    if(typeof servicesh === 'string')
   {services = [servicesh]
   }
   else
   {services = servicesh}
    console.log(services)
    
    var price =0
    var priceHelper;
    var servicesname = ""
   
    for(var i = 0;i<services.length;i++)
    {
     var temp = services[i].split("-")
     servicesname = servicesname + temp[1].substring(1) + "/ "
     priceHelper = temp[0]
     priceHelper = priceHelper.substring(0,priceHelper.length-3)
     
     price = price + parseInt(priceHelper)
    
   
       
 
    }
    servicesname = servicesname.substring(0,servicesname.length-2)
   
    var name = req.body.client_name_masks;
    var phoneNumber = req.body.client_phone_masks;
    var serviceCategory = "Masks";
    
    
    var email = req.body.client_email_masks // estna hany y7ot el mail fe el front end
    
    
    
    var PaymentMethod = 0; // 0 if cash and 1 if online payment
    if(req.body.payment_method_masks==="Online Payment")
   {PaymentMethod =1;}
    var Paid =0 ; 
    if(PaymentMethod===1)
    {Paid = 1;}
    var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled
   
   
    var DateTime = req.body.masks_day;
    
 
     
    if(PaymentMethod===1)
    { var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
        var h = uniqueID();
        var helper = '"'+Query+'"'
        var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
        insertInDB(QueryR)
        
        var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
        res.redirect(url)
        
        
        



    }
    else
    { var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
     
     insertInDB(Query);
     whatsappmsg(name,servicesname,DateTime,"Cash");
     res.redirect('/Confirm')
 
    }
    
     
 
     })






app.post('/NailSpaOrder',(req,res)=>{
    var servicesh = req.body.nailspa_services;
    var services
    if(typeof servicesh === 'string')
   {services = [servicesh]
   }
   else
   {services = servicesh}
    console.log(services)
    
    var price =0
    var priceHelper;
    var servicesname = ""
   
    for(var i = 0;i<services.length;i++)
    {
     var temp = services[i].split("-")
     servicesname = servicesname + temp[1].substring(1) + "/ "
     priceHelper = temp[0]
     priceHelper = priceHelper.substring(0,priceHelper.length-3)
     
     price = price + parseInt(priceHelper)
    
   
       
 
    }
    servicesname = servicesname.substring(0,servicesname.length-2)
    var name = req.body.client_name_nailspa;
    var phoneNumber = req.body.client_phone_nailspa;
    var serviceCategory = "Nail Spa";
    
    var email = req.body.client_email_nailspa // estna hany y7ot el mail fe el front end
    
    var PaymentMethod = 0; // 0 if cash and 1 if online payment
    if(req.body.payment_method_nailspa==="Online Payment")
   {PaymentMethod =1;}
    var Paid =0 ; 
    if(PaymentMethod===1)
    {Paid = 1;}
    var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled
   
   
    var DateTime = req.body.nailspa_day;
 
    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
     
    if(PaymentMethod===1)
    {var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
    var h = uniqueID();
    var helper = '"'+Query+'"'
    var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
    insertInDB(QueryR)
    
    var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
    res.redirect(url)
}
    else
    { 
     insertInDB(Query);
     whatsappmsg(name,servicesname,DateTime,"Cash");
     res.redirect('/Confirm')
 
    }
     
 
     })


app.post('/HairCutOrder',(req,res)=>{
    var servicesh = req.body.haircut_services;
    var services
    if(typeof servicesh === 'string')
   {services = [servicesh]
   }
   else
   {services = servicesh}
    console.log(services)
    
    var price =0
    var priceHelper;
    var servicesname = ""
   
    for(var i = 0;i<services.length;i++)
    {
     var temp = services[i].split("-")
     servicesname = servicesname + temp[1].substring(1) + "/ "
     priceHelper = temp[0]
     priceHelper = priceHelper.substring(0,priceHelper.length-3)
     
     price = price + parseInt(priceHelper)
    
   
       
 
    }
    servicesname = servicesname.substring(0,servicesname.length-2)
    var name = req.body.client_name_haircut;
    var phoneNumber = req.body.client_phone_haircut;
    var serviceCategory = "Hair Cut";
    
    
    var email = req.body.client_email_haircut // estna hany y7ot el mail fe el front end
    
    
    
    var PaymentMethod = 0; // 0 if cash and 1 if online payment
    if(req.body.payment_method_haircut==="Online Payment")
   {PaymentMethod =1;}
    var Paid =0 ; 
    if(PaymentMethod===1)
    {Paid = 1;}
    var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled
   
   
    var DateTime = req.body.haircut_day;
 
    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
     
    if(PaymentMethod===1)
    {
        var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
        var h = uniqueID();
        var helper = '"'+Query+'"'
        var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
        insertInDB(QueryR)
        
        var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
        res.redirect(url)


    }
    else
    { 
     insertInDB(Query);
     whatsappmsg(name,servicesname,DateTime,"Cash");
     res.redirect('/Confirm')
 
    }
     
 
     })




app.post('/SalonOrder',(req,res)=>{
    var servicesh = req.body.salon_services;
    var services
    if(typeof servicesh === 'string')
   {services = [servicesh]
   }
   else
   {services = servicesh}
    console.log(services)
    
    var price =0
    var priceHelper;
    var servicesname = ""
   
    for(var i = 0;i<services.length;i++)
    {
     var temp = services[i].split("-")
     servicesname = servicesname + temp[1].substring(1) + "/ "
     priceHelper = temp[0]
     priceHelper = priceHelper.substring(0,priceHelper.length-3)
     
     price = price + parseInt(priceHelper)
    
   
       
 
    }
    servicesname = servicesname.substring(0,servicesname.length-2)
    var name = req.body.client_name_salon;
    var phoneNumber = req.body.client_phone_salon;
    var serviceCategory = "Salon";
    
    
    var email = req.body.client_email_salon // estna hany y7ot el mail fe el front end
   
    
    
    var PaymentMethod = 0; // 0 if cash and 1 if online payment
    if(req.body.payment_method_salon==="Online Payment")
   {PaymentMethod =1;}
    var Paid =0 ; 
    if(PaymentMethod===1)
    {Paid = 1;}
    var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled
   
    
    var DateTime = req.body.salon_day;
 
    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
     
    if(PaymentMethod===1)
    {
        var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
        var h = uniqueID();
        var helper = '"'+Query+'"'
        var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
        insertInDB(QueryR)
        
        var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
        res.redirect(url)



    }
    else
    { 
     insertInDB(Query);
     whatsappmsg(name,servicesname,DateTime,"Cash");
     res.redirect('/Confirm')
 
    }
     
 
     })












app.post('/SpaOrder',(req,res)=>{
    var servicesh = req.body.spa_services;
   var services
   if(typeof servicesh === 'string')
  {services = [servicesh]
  }
  else
  {services = servicesh}
   console.log(services)
   
   var price =0
   var priceHelper;
   var servicesname = ""
  
   for(var i = 0;i<services.length;i++)
   {
    var temp = services[i].split("-")
    servicesname = servicesname + temp[1].substring(1) + "/ "
    priceHelper = temp[0]
    priceHelper = priceHelper.substring(0,priceHelper.length-3)
    
    price = price + parseInt(priceHelper)
   
  
      

   }
   servicesname = servicesname.substring(0,servicesname.length-2)
    var name = req.body.client_name_spa;
    var phoneNumber = req.body.client_phone_spa;
    var serviceCategory = "Spa";
    
    
    var email = req.body.client_email_spa // estna hany y7ot el mail fe el front end
    
    
    
    var PaymentMethod = 0; // 0 if cash and 1 if online payment
    if(req.body.payment_method_spa==="Online Payment")
   {PaymentMethod =1;}
    var Paid =0 ; 
    if(PaymentMethod===1)
    {Paid = 1;}
    var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled
   
    
    var DateTime = req.body.spa_day;
 
    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
     
    if(PaymentMethod===1)
    {
        var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
        var h = uniqueID();
        var helper = '"'+Query+'"'
        var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
        insertInDB(QueryR)
        
        var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
        res.redirect(url)


    }
    else
    { 
     insertInDB(Query);
     whatsappmsg(name,servicesname,DateTime,"Cash");
     res.redirect('/Confirm')
 
    }
     
 
     })




app.post('/MakeUpOrder',(req,res)=>{
    var servicesh = req.body.makeup_services;
   var services
   if(typeof servicesh === 'string')
  {services = [servicesh]
  }
  else
  {services = servicesh}
   console.log(services)
   
   var price =0
   var priceHelper;
   var servicesname = ""
  
   for(var i = 0;i<services.length;i++)
   {
    var temp = services[i].split("-")
    servicesname = servicesname + temp[1].substring(1) + "/ "
    priceHelper = temp[0]
    priceHelper = priceHelper.substring(0,priceHelper.length-3)
    
    price = price + parseInt(priceHelper)
   
  
      

   }
   servicesname = servicesname.substring(0,servicesname.length-2)
    var name = req.body.client_name_makeup;
    var phoneNumber = req.body.client_phone_makeup;
    var serviceCategory = "MakeUp";
    
    
    var email = req.body.client_email_makeup // estna hany y7ot el mail fe el front end
    
    
    
    var PaymentMethod = 0; // 0 if cash and 1 if online payment
    if(req.body.payment_method_makeup==="Online Payment")
   {PaymentMethod =1;}
    var Paid =0 ; 
    if(PaymentMethod===1)
    {Paid = 1;}
    var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled
   
    
    var DateTime = req.body.makeup_day;
 
    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
     
    if(PaymentMethod===1)
    {
        var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
        var h = uniqueID();
        var helper = '"'+Query+'"'
        var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
        insertInDB(QueryR)
        
        var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
        res.redirect(url)


    }
    else
    { 
     insertInDB(Query);
     whatsappmsg(name,servicesname,DateTime,"Cash");
     res.redirect('/Confirm')
 
    }
     
 
     })









app.post('/SessionOrder',(req,res)=>{
    var servicesh = req.body.session_services;
   var services
   if(typeof servicesh === 'string')
  {services = [servicesh]
  }
  else
  {services = servicesh}
   console.log(services)
   
   var price =0
   var priceHelper;
   var servicesname = ""
  
   for(var i = 0;i<services.length;i++)
   {
    var temp = services[i].split("-")
    servicesname = servicesname + temp[1].substring(1) + "/ "
    priceHelper = temp[0]
    priceHelper = priceHelper.substring(0,priceHelper.length-3)
    
    price = price + parseInt(priceHelper)
   
  
      

   }
   servicesname = servicesname.substring(0,servicesname.length-2)
   
    var name = req.body.client_name_session;
    var phoneNumber = req.body.client_phone_session;
    var serviceCategory = "Session";
    
    var email = req.body.client_email_session // estna hany y7ot el mail fe el front end
    
    
    
    var PaymentMethod = 0; // 0 if cash and 1 if online payment
    if(req.body.payment_method_session==="Online Payment")
   {PaymentMethod =1;}
    var Paid =0 ; 
    if(PaymentMethod===1)
    {Paid = 1;}
    var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled
   
    
    var DateTime = req.body.session_day;
 
    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
     
    if(PaymentMethod===1)
   {

    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
    var h = uniqueID();
    var helper = '"'+Query+'"'
    var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
    insertInDB(QueryR)
    
    var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
    res.redirect(url)

   }
   else
   { 
    insertInDB(Query);
    whatsappmsg(name,servicesname,DateTime,"Cash");
    res.redirect('/Confirm')

   }
    
 
     
     })



app.post('/HairOrder',(req,res)=>{
   var name = req.body.client_name_sweet;
   var phoneNumber = req.body.client_phone_sweet;
   var serviceCategory = "Hair Removal";
   var servicesh = req.body.sweet_services;
   var services
   if(typeof servicesh === 'string')
  {services = [servicesh]
  }
  else
  {services = servicesh}
   console.log(services)
   
   var price =0
   var priceHelper;
   var servicesname = ""
  
   for(var i = 0;i<services.length;i++)
   {
    var temp = services[i].split("-")
    servicesname = servicesname + temp[0] + "/ "
    priceHelper = temp[1].substring(1)
    priceHelper = priceHelper.substring(0,priceHelper.length-3)
    
    price = price + parseInt(priceHelper)
   
  
      

   }
   servicesname.substring(0,servicesname.length-2)
  var email = req.body.client_email_sweet // estna hany y7ot el mail fe el front end


   var PaymentMethod = 0; // 0 if cash and 1 if online payment
   if(req.body.payment_method_sweet==="Online Payment")
   {PaymentMethod =1;}
   var Paid =0 ; 
   if(PaymentMethod===1)
   {Paid = 1;}
   var statues = 0; // 0 if new , 1 waiting , 2 done , 3 cancelled

   var DateTime = req.body.sweet_day;
   var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
   
   if(PaymentMethod===1)
   {

    var Query = "INSERT INTO orders VALUES ( NULL, '"+ name + "', '" + phoneNumber + "', '" + email + "', '" + PaymentMethod + "', '" + serviceCategory + "', '" + servicesname + "', '" + price+ "', '" + Paid + "', '" + statues + "', '" + DateTime + "')";
      
    var h = uniqueID();
    var helper = '"'+Query+'"'
    var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
    insertInDB(QueryR)
    
    var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
    res.redirect(url)


   }
   else
   { 
    insertInDB(Query);
    whatsappmsg(name,servicesname,DateTime,"Cash");
    res.redirect('/Confirm')

   }
    
     
   

    
    
    })



app.get('/Confirm',(req,res)=>{

        res.render('confirm (3).html')
           
            
    })
    


app.get('/Home',(req,res)=>{
    con.query("SELECT * FROM `products`", function (err, result) { 
        if(err)
        {console.log(err)}
        res.render('Home.html',{items:result})

       
    
    });
    

    
   
    
    })

app.get('/AboutUs',(req,res)=>{

        res.render('about.html')
        
 })   





app.get('/Spa',(req,res)=>{

    res.render('spa.html')
    
})


app.get('/Products',(req,res)=>{

    con.query("SELECT * FROM `products`", function (err, result) { 
        res.render('product.html',{items:result})

       
    
    });
    
})



app.get('/Sweet',(req,res)=>{

    res.render('sweet.html')
    
})



app.get('/Makeup',(req,res)=>{

    res.render('makeup.html')
            
})


        
app.get('/Hair',(req,res)=>{

    res.render('hair.html')
})        
        
 
    


app.get('/Sessions',(req,res)=>{

            res.render('sessions.html')
  })


app.get('/Nailspa',(req,res)=>{

    res.render('nailspa.html')
})

app.get('/Masks',(req,res)=>{

    res.render('masks.html')
})

app.get('/Salon',(req,res)=>{

    res.render('salon.html')
})

app.get('/Pricing-plans',(req,res)=>{

    res.render('pricing-plans.html')
})

app.get('/Client',(req,res)=>{

    res.render('client.html')
})
app.get('/ProductDeatails/:id',(req,res)=>{

    
    con.query("SELECT * FROM `products` WHERE ID = '"+req.params.id+"'", function (err, result) { 
        res.render('product-details (1).html',{item:result[0]})
        

       
    
    });
})

app.post('/ProductCheckOut/:id',(req,res)=>{
    let today = new Date().toISOString().slice(0, 10)


    var Query = "INSERT INTO productorder VALUES ( NULL, '"+ req.body.client_name_product + "', '" + req.body.client_email_product + "', '" + req.body.client_phone_product + "', '" + req.body.client_address_product + "', '" + req.params.id + "', '" + req.body.product_count + "', '"+today+"', 0)";
   var h = uniqueID();
   console.log(req.body)
    var helper = '"'+Query+'"'
    var QueryR = "INSERT INTO onlineid VALUES('"+h+"', "+ helper+")"
    insertInDB(QueryR)
    con.query("SELECT price FROM `products` WHERE ID = '"+req.params.id+"'", function (err, result) { 
          var price = result[0].price * parseInt(req.body.product_count);
          var url = 'https://checkout.kashier.io/?merchantId=MID-14306-802&orderId='+h.toString()+'&amount='+price.toString()+'&currency=EGP&hash='+generateKashierOrderHash(h,price)+'&mode=test&merchantRedirect='+callBack+'&serverWebhook=&metaData=&paymentRequestId=&allowedMethods=&defaultMethod=&failureRedirect=&redirectMethod=post&connectedAccount=&brandColor=&display=ar'
          res.redirect(url)

       
    
    });
    
    
})

app.get('/', function (req, res) {
    
    res.redirect('/Home')

})
app.get('*', function (req, res) {
    res.redirect('/Home')
})


app.listen(port,()=>{
console.log("server is running on http://localhost:"+port+"/")

})