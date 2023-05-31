const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>CMPE 212 DEMO</h1> <h4>Message: Success.</h4> <p>Version 1.1.1</p>');
})

app.get('/students', (req, res) => {
  res.send([
    {
      StuName: 'Asli',
      StuId: 121200107
    },
    {
      StuName: 'Tugce A',
      StuId: 122130183
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 


