const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
const dataModel = require("./models/UserData");
const adjustschema = require("./models/Adjust");
const dotenv=require('dotenv');
dotenv.config();
const port = process.env.PORT || 6000
// const infoModel = require("./models/info")

mongoose.connect("mongodb+srv://atharva1bokade:456abc123@information.hwmdy.mongodb.net/information?retryWrites=true&w=majority",
 {
    useNewUrlParser: true,
});

app.post("/add", async (req,res)=>{
    const userName = req.body.userName;
    const reason = req.body.reason;
    const email = req.body.email;
    const time = req.body.time;
    
const data = new dataModel({userName:userName,reason:reason,email:email,time:time});
try{
    await data.save();
    res.send("Data added");
} catch(err){
    console.log(err);
}
});

app.put("/approve", async (req,res)=>{
    const new_approve = req.body.approve;
    const id=req.body.id;
    
    
    try{
        await dataModel.findById(id,(err,update_appr)=>{
                update_appr.approve = new_approve;
                update_appr.save();
                res.send("Updated");
        });
   
} catch(err){
    console.log(err);
}
});

app.get("/accepted",  (req,res)=>{
 dataModel.find({approve:"Approved"},(err,result)=>{
if(err){
    res.send(err);
}
  res.send(result);
 });

});
app.get("/rejected",  (req,res)=>{
    dataModel.find({approve:"Rejected"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   app.get("/pending",  (req,res)=>{
    dataModel.find({approve:"Not Approved"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   
   
   
 app.get("/requests1",  (req,res)=>{
    dataModel.find({time:"9am to 10am",approve:"Not Approved"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
app.get("/requests2",  (req,res)=>{
    dataModel.find({time:"10am to 11am",approve:"Not Approved"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   app.get("/requests3",  (req,res)=>{
    dataModel.find({time:"12pm to 1pm",approve:"Not Approved"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   app.get("/requests4",  (req,res)=>{
    dataModel.find({time:"2pm to 3pm",approve:"Not Approved"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   app.get("/requests5",  (req,res)=>{
    dataModel.find({time:"4pm to 5pm",approve:"Not Approved"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   app.get("/all",  (req,res)=>{
    dataModel.find({},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   app.put("/email_sending", async (req,res)=>{
    const new_email_send = req.body.email_send;
    const id=req.body.id;
    
    
    try{
        await dataModel.findById(id,(err,update_email_send)=>{
                update_email_send.email_send = new_email_send;
                update_email_send.save();
                res.send("Updated");
        });
   
} catch(err){
    console.log(err);
}
});
   app.get("/email_s",  (req,res)=>{
    dataModel.find({email_send:"Elligible"},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   app.get("/time_cancel",  (req,res)=>{
    adjustschema.find({},(err,result)=>{
   if(err){
       res.send(err);
   }
     res.send(result);
    });
   
   });
   
//    app.get("/status",  (req,res)=>{
//     dataModel.find({userName:req.body.name},(err,result)=>{
//    if(err){
//        res.send(err);
//    }
//      res.send(result);
//     });
   
//    });
app.listen(port, ()=>{
    console.log("Server running on port "+port);
});