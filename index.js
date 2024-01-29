const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
    date: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT=${PORT}`);
});
