const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/login',(req,res) =>{
    res.send('hello welcome to login page')
})

app.get('/orders',(req,res) =>{
    res.send('this is orders page')
})
app.get('/home',(req,res)=>{
    res.send('this is homepage')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
