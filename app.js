const express = require('express')
const bodyParser = require('body-parser')

const app=express()
const port = 8080;

app.use(bodyParser.json())

app.get('/health',(req,res)=>{
    res.header({"System-Health":true})
    res.sendStatus(204)
})

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const fibonacci = n =>{
  if(n <=1){
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

app.post('/fibonacci',(req,res)=>{
  const fibIndex = req.body.fibindex
  res.status(202).json({ index: fibIndex, result: "calculating......"})

  console.log("Fibonacci number",fibonacci(fibIndex))
})
