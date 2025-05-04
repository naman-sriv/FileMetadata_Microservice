require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const upload = require('./upload');

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('/public'));

app.get('/', (req, res)=>{
    return res.sendFile(__dirname+'/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
    if(req.file){
        return res.status(200).json({
            name: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size
        });
    }
});



const listener = app.listen(process.env.PORT || 3000, ()=>{
    console.log("Your app is listening on port "+listener.address().port);
});
