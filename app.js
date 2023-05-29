const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>CMPE 212 DEMO</h1> <h4>Message: Success.</h4> <p>Version 1.1</p>');
})

app.get('/students', (req, res) => {
  res.send([
    {
      StuName: 'Asli Gizem',
      StuId: 121200107
    },
    {
      StuName: 'Tugce',
      StuId: 122130193
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
