const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 5;
  var b = 6;
  var c = a + b;
  console.log(c);

  res.send('Hello dashds dasd  ads s a2 a dasdhWorld!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})