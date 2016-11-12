var express = require("express"),
    multer  = require("multer"),
    upload  = multer(),
    app     = express();
    
app.set("view engine", "ejs");
app.get("/",function(req,res){
    
    res.render("index");
});

app.get("/upload",function(req,res){
    res.redirect("/");
});

app.post("/upload",upload.single("file"),function(req,res){
    res.json({name: req.file.originalname , size : req.file.size });
    
    
});
    
app.listen(process.env.PORT, process.env.IP);