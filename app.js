const express = require('express');
const app = express();
const port = 3000;



// Route Imports
const student = require('./routes/studentRoutes');
app.use('api/v1',student);


// app.get('/hello', (req,res)=>{
//     res.send('Hello this is Sneha');
// });


app.listen(port, ()=>{
    console.log(`server is running on port no: ${port}`);
});


