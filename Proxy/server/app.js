const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT = '3500' } = process.env;
const app = express();

// app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(bodyParser.json());
app.get('/info', (req, res) => {
  res.json({ message: '如果你看到這段訊息，代表請求成功。' });
});

app.listen(PORT);
