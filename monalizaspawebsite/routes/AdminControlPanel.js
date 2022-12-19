const express = require('express');
let router = express.Router();

const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
var mysql = require('mysql');
router.use(cookieParser());
const jwtKey = "sadkfjksjalfkjlwq24df"
const jwtExpirySeconds = 7200

var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "spa"
  });

  router.get('/',(req,res)=>{
    const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
    
    
    
        res.redirect('/AdminControlPanel/Home')
     
      
  

   
   })


   router.get('/Login',(req,res)=>{
    
    const token = req.cookies.token
if(!token)
{res.render('login.html',{msg:""})
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.render('login.html',{msg:""})
res.end()
}
    
res.redirect('/AdminControlPanel/Home')
    
 
  



})
router.post('/Login',(req,res)=>{
    
    
    
  con.query("SELECT * FROM admin WHERE UserName = '"+req.body.user+"'", function (err, result, fields) {
    if (err) throw err;
    
    if(result.length ===0)
    { res.render('login.html',{msg:"Username is Wrong!"})}
    else
    {
if(result[0].Password===req.body.pass)
{ var user = req.body.user
  var postion = result[0].Postion
  const token = jwt.sign({ user,postion }, jwtKey, {
		algorithm: "HS256",
		expiresIn: jwtExpirySeconds,
	})
	
  res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })


  res.redirect('/AdminControlPanel/Home')
}
else
{res.render('login.html',{msg:"Password is Wrong!"})}


    }
  });
  





})
router.get('/Home',(req,res)=>{
  const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
  
  res.render('intro.html')
    
   

   
   })

   


router.get('/Order',(req,res)=>{
  const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}

    
    con.query("SELECT * FROM orders ORDER BY ID ASC", function (err, result, fields) {
        if (err) throw err;
       
        res.render('order.ejs',{ items: result })
      });
      
   
   })

   router.get('/ProductsOrder',(req,res)=>{
    const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
    
 
    con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
        if (err) throw err;
        
        res.render('products-orders.ejs',{ items: result })
      });
      
  
     
   
   })

router.post('/ProductsOrder',(req,res)=>{
  const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
    var checkStatus = false;
    var checkDate = false;
    
    if(req.body.valueToSearch!="")
    {checkStatus = true;}
    if(req.body.search_date!="")
    {checkDate=true}
    if(!checkStatus&!checkDate)
    {res.redirect('/AdminControlPanel/ProductsOrder');}
if(checkStatus&!checkDate){
      switch(req.body.valueToSearch) {
        case "NEW":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderStatus = 0 ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
          break;
        case "WAITING":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID  WHERE productorder.OrderStatus = 1 ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
          break;

        case "DONE":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderStatus = 2 ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
            break;
         case "CANELED":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderStatus = 3 ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
              if (err) throw err;
             res.render('products-orders.ejs',{ items: result })
                    
             });
                break;
        default:
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
         
      }}

      if(checkDate&!checkStatus)
      {

       var startDate = "'"+req.body.search_date + "T00:00:00.000Z'"
       var endDate = "'"+req.body.search_date + "T23:59:00.000Z'"
       con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderDate BETWEEN "+ startDate+" AND "+endDate+" ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
        if (err) throw err;
       res.render('products-orders.ejs',{ items: result })
              
       });

      }
    
     if(checkDate&&checkStatus)
     {var startDate = "'"+req.body.search_date + "T00:00:00.000Z'"
     var endDate = "'"+req.body.search_date + "T23:59:00.000Z'"
      switch(req.body.valueToSearch) {
        case "NEW":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderStatus = '0' AND productorder.OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
          break;
        case "WAITING":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderStatus = '1' AND productorder.OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
          break;

        case "DONE":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderStatus = '2' AND productorder.OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
            break;
         case "CANELED":
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID WHERE productorder.OrderStatus = '3' AND productorder.OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
              if (err) throw err;
             res.render('products-orders.ejs',{ items: result })
                    
             });
                break;
        default:
            con.query("SELECT * FROM productorder INNER JOIN products ON productorder.Product=products.ID ORDER BY productorder.productOrderID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('products-orders.ejs',{ items: result })
                
              });
         
      }
     }

    
   })
















   router.post('/Order',(req,res)=>{
    const token = req.cookies.token
    if(!token)
    {res.redirect('/AdminControlPanel/Login')
    res.end()
    }
    var payload 
    try {
      payload = jwt.verify(token, jwtKey)
    } catch (e) {
      res.redirect('/AdminControlPanel/Login')
    res.end()
    }
    var checkStatus = false;
    var checkDate = false;
    
    if(req.body.valueToSearch!="")
    {checkStatus = true;}
    if(req.body.search_date!="")
    {checkDate=true}
    if(!checkStatus&!checkDate)
    {res.redirect('/AdminControlPanel/Order');}
if(checkStatus&!checkDate){
      switch(req.body.valueToSearch) {
        case "NEW":
            con.query("SELECT * FROM orders WHERE OrderStatus = '0' ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
          break;
        case "WAITING":
            con.query("SELECT * FROM orders WHERE OrderStatus = '1' ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
          break;

        case "DONE":
            con.query("SELECT * FROM orders WHERE OrderStatus = '2' ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
            break;
         case "CANELED":
            con.query("SELECT * FROM orders WHERE OrderStatus = '3' ORDER BY ID ASC", function (err, result, fields) {
              if (err) throw err;
             res.render('order.ejs',{ items: result })
                    
             });
                break;
        default:
            con.query("SELECT * FROM orders ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
         
      }}

      if(checkDate&!checkStatus)
      {

       var startDate = "'"+req.body.search_date + "T00:00:00.000Z'"
       var endDate = "'"+req.body.search_date + "T23:59:00.000Z'"
       con.query("SELECT * FROM orders WHERE OrderDate BETWEEN "+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
        if (err) throw err;
       res.render('order.ejs',{ items: result })
              
       });

      }
    
     if(checkDate&&checkStatus)
     {var startDate = "'"+req.body.search_date + "T00:00:00.000Z'"
     var endDate = "'"+req.body.search_date + "T23:59:00.000Z'"
      switch(req.body.valueToSearch) {
        case "NEW":
            con.query("SELECT * FROM orders WHERE OrderStatus = '0' AND OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
          break;
        case "WAITING":
            con.query("SELECT * FROM orders WHERE OrderStatus = '1'AND OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
          break;

        case "DONE":
            con.query("SELECT * FROM orders WHERE OrderStatus = '2' AND OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
            break;
         case "CANELED":
            con.query("SELECT * FROM orders WHERE OrderStatus = '3' AND OrderDate BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
              if (err) throw err;
             res.render('order.ejs',{ items: result })
                    
             });
                break;
        default:
            con.query("SELECT * FROM orders ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('order.ejs',{ items: result })
                
              });
         
      }
     }

   
   })

   

   router.get('/ProductsOrder/Edit/:id',(req,res)=>{
    const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
   
    con.query("SELECT * FROM productorder WHERE productOrderID = '"+req.params.id+"'", function (err, result, fields) {
      if (err) throw err;
      res.render('edit1.html',{id:req.params.id,state:result[0].OrderStatus})
      
    });
    
   
      
  
    
   
   })
   router.get('/Order/Edit/:id',(req,res)=>{
    const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
    
    con.query("SELECT * FROM orders WHERE ID = '"+req.params.id+"'", function (err, result, fields) {
      if (err) throw err;
      res.render('edit.html',{id:req.params.id,payment:result[0].isPaid,state:result[0].OrderStatus})
      
    });
    
   
      
  
  
   
   })



   router.post('/Order/Edit/:id',(req,res)=>{
    const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
   
    switch(req.body.Status)
    {case "NEW":
    con.query("UPDATE orders SET OrderStatus = '0' WHERE ID = "+req.params.id, function (err, result, fields) {
      
      
    });
    break;
    case "WAITING":
      con.query("UPDATE orders SET OrderStatus = '1' WHERE ID = "+req.params.id, function (err, result, fields) {
        
        
      });
      break;
      case "DONE":
        con.query("UPDATE orders SET OrderStatus = '2' WHERE ID = "+req.params.id, function (err, result, fields) {
          
          
        });
        break;
        case "CANELED":
          con.query("UPDATE orders SET OrderStatus = '3' WHERE ID = "+req.params.id, function (err, result, fields) {
            
            
          });
          break;



    }
    
    if(req.body.payment_status === "PAID")
    {
      con.query("UPDATE orders SET isPaid = '1' WHERE ID = "+req.params.id, function (err, result, fields) {
            
            
      });


    }
    
   
    
    res.redirect('/AdminControlPanel/Order');
  
  
   
   })





   router.post('/ProductsOrder/Edit/:id',(req,res)=>{
    const token = req.cookies.token
    if(!token)
    {res.redirect('/AdminControlPanel/Login')
    res.end()
    }
    var payload 
    try {
      payload = jwt.verify(token, jwtKey)
    } catch (e) {
      res.redirect('/AdminControlPanel/Login')
    res.end()
    }
   
    switch(req.body.Status)
    {case "NEW":
    con.query("UPDATE productorder SET OrderStatus = '0' WHERE productOrderID = "+req.params.id, function (err, result, fields) {
      
      
    });
    break;
    case "WAITING":
      con.query("UPDATE productorder SET OrderStatus = '1' WHERE productOrderID = "+req.params.id, function (err, result, fields) {
        
        
      });
      break;
      case "DONE":
        con.query("UPDATE productorder SET OrderStatus = '2' WHERE productOrderID = "+req.params.id, function (err, result, fields) {
          
          
        });
        break;
        case "CANELED":
          con.query("UPDATE productorder SET OrderStatus = '3' WHERE productOrderID = "+req.params.id, function (err, result, fields) {
            
            
          });
          break;



    }
    
    
   
    
    res.redirect('/AdminControlPanel/ProductsOrder');
  

  
   })
   router.get('/Brides-Orders',(req,res)=>{
    
    const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
    
con.query("SELECT * FROM event ORDER BY ID ASC", function (err, result, fields) {
  if (err) throw err;
  
  res.render('brides-orders.ejs',{items:result})
  
});

    
 
  



})

router.get('/Brides-Orders/AddOrder',(req,res)=>{
const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}

res.render('brides-addorder.html')





})
router.post('/Brides-Orders/AddOrder',(req,res)=>{
  const token = req.cookies.token
  if(!token)
  {res.redirect('/AdminControlPanel/Login')
  res.end()
  }
  var payload 
  try {
  payload = jwt.verify(token, jwtKey)
  } catch (e) {
    res.redirect('/AdminControlPanel/Login')
  res.end()
  }
  var name = req.body.client_name_event 
  var mail = req.body.client_email_event
  var number = req.body.client_phone_event
  var event
  switch(req.body.event_name)
  {
case "item1": event = "زفاف"
break; 
case "item2": event = "حنة"
break;
case "item3":event = "خطوبة"
break;


  }
  var temp = req.body.package_name.split(',')
  
  var price = parseInt(temp[0])
  
  var package = temp[1]
  var addons
  var addonstemp = req.body.other_sevices
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
  var deposit = parseInt(req.body.client_deposite)
  var datee = req.body.event_date
  var comment = req.body.AdminComment
 
  let today = new Date().toISOString().slice(0, 10)
  var Query = "INSERT INTO event VALUES ( NULL, '"+ name + "', '" + number + "', '" + mail + "', '" + event + "', '" + package + "', '" + today + "', '" + deposit+ "', '" + (price-deposit) + "', '"+datee+"', '" + 0 + "', '" + price + "', '"+comment+"', '" +extra+"')";

  con.query(Query, function (err, result) { 
    if(err) console.log(err) 

   

}); 
  res.redirect('/AdminControlPanel/Brides-Orders')

  
  
  
  
  
  
  
  })



router.get('/Brides-Orders/Edit/:id',(req,res)=>{
  const token = req.cookies.token
    if(!token)
    {res.redirect('/AdminControlPanel/Login')
    res.end()
    }
    var payload 
    try {
    payload = jwt.verify(token, jwtKey)
    } catch (e) {
      res.redirect('/AdminControlPanel/Login')
    res.end()
    }
    con.query("SELECT * FROM event WHERE ID = " +req.params.id, function (err, result, fields) {
      
      res.render('brides-editorder.html',{item:result[0]})
      
    });
  
  
  
  
  
  
  })

  router.post('/Brides-Orders/Edit/:id',(req,res)=>{
    const token = req.cookies.token
      if(!token)
      {res.redirect('/AdminControlPanel/Login')
      res.end()
      }
      var payload 
      try {
      payload = jwt.verify(token, jwtKey)
      } catch (e) {
        res.redirect('/AdminControlPanel/Login')
      res.end()
      }
      var paidamount = req.body.paidamount
      var comment = req.body.AdminComment
      var statues = req.body.client_status_event
      




      con.query("UPDATE event SET PaidAmount = PaidAmount+"+paidamount+", NotPaidAmount= NotPaidAmount -"+paidamount+", AdminComment='"+comment+"', client_status_event = '"+statues+"' WHERE ID = " +req.params.id, function (err, result, fields) {
        if(err) console.log(err)
        res.redirect('/AdminControlPanel/Brides-Orders')
        
      });
    
    
    
    
    
    
    })
  router.get('/Brides-Orders/Delete/:id',(req,res)=>{
    const token = req.cookies.token
    if(!token)
    {res.redirect('/AdminControlPanel/Login')
    res.end()
    }
    var payload 
    try {
    payload = jwt.verify(token, jwtKey)
    } catch (e) {
      res.redirect('/AdminControlPanel/Login')
    res.end()
    }
     
    con.query("DELETE FROM event WHERE ID = " +req.params.id, function (err, result, fields) {
      
      res.redirect('/AdminControlPanel/Brides-Orders')
      
    });
    
    
    
    
    
    })
router.post('/Brides-Orders',(req,res)=>{
    
  const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
var checkStatus = false;
    var checkDate = false;
    
    if(req.body.valueToSearch!="")
    {checkStatus = true;}
    if(req.body.search_date!="")
    {checkDate=true}
    if(!checkStatus&!checkDate)
    {res.redirect('/AdminControlPanel/Brides-Orders');}
    

    if(checkStatus&!checkDate){
      switch(req.body.valueToSearch) {
        case "NEW":
            con.query("SELECT * FROM event WHERE client_status_event = '0' ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
          break;
        case "WAITING":
            con.query("SELECT * FROM event WHERE client_status_event = '1' ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
          break;

        case "DONE":
            con.query("SELECT * FROM event WHERE client_status_event = '2' ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
            break;
         case "CANELED":
            con.query("SELECT * FROM event WHERE client_status_event = '3' ORDER BY ID ASC", function (err, result, fields) {
              if (err) throw err;
             res.render('brides-orders.ejs',{ items: result })
                    
             });
                break;
        default:
            con.query("SELECT * FROM event ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
         
      }}



      if(checkDate&!checkStatus)
      {

       var startDate = "'"+req.body.search_date + "T00:00:00.000Z'"
       var endDate = "'"+req.body.search_date + "T23:59:00.000Z'"
       
       con.query("SELECT * FROM `event` WHERE event_date BETWEEN "+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
        if (err) throw err;
       res.render('brides-orders.ejs',{ items: result })
              
       });

      }


      if(checkDate&&checkStatus)
     {var startDate = "'"+req.body.search_date + "T00:00:00.000Z'"
     var endDate = "'"+req.body.search_date + "T23:59:00.000Z'"
      switch(req.body.valueToSearch) {
        case "NEW":
            con.query("SELECT * FROM event WHERE client_status_event = '0' AND event_date BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
          break;
        case "WAITING":
            con.query("SELECT * FROM event WHERE client_status_event = '1' AND event_date BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
          break;

        case "DONE":
            con.query("SELECT * FROM event WHERE client_status_event = '2' AND event_date BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
            break;
         case "CANELED":
            con.query("SELECT * FROM event WHERE client_status_event = '3' AND event_date BETWEEN"+ startDate+" AND "+endDate+" ORDER BY ID ASC", function (err, result, fields) {
              if (err) throw err;
             res.render('brides-orders.ejs',{ items: result })
                    
             });
                break;
        default:
            con.query("SELECT * FROM event ORDER BY ID ASC", function (err, result, fields) {
                if (err) throw err;
                res.render('brides-orders.ejs',{ items: result })
                
              });
         
      }
     }

  





})

   router.get('*',(req,res)=>{
    
    const token = req.cookies.token
if(!token)
{res.redirect('/AdminControlPanel/Login')
res.end()
}
var payload 
try {
  payload = jwt.verify(token, jwtKey)
} catch (e) {
  res.redirect('/AdminControlPanel/Login')
res.end()
}
    
    
    res.redirect('/AdminControlPanel/Home')
 
  



})


module.exports = router;
