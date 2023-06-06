const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>AWS Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})

app.get('/students', (req, res) => {
  res.send([
    {
      stuName: 'Emir',
      stuId: 100
    },
    {
     stuName: 'Kayra',
     stuId: 101
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
