const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Server A');
});

app.listen(port, () => {
  console.log(`Server A listening at http://localhost:${port}`);
  keepAlive();
});

function keepAlive() {
  setInterval(() => {
    // Ping Server B
    axios.get('https://server-beta-3.onrender.com/')
      .then(response => {
        console.log('Ping to Server B successful');
      })
      .catch(error => {
        console.error('Error pinging Server B:', error);
      });

    // Ping external server
    axios.get('https://informatique-dz-api-3.onrender.com/')
      .then(response => {
        console.log('Ping to external server successful');
      })
      .catch(error => {
        console.error('Error pinging external server:', error);
      });
  }, 120000); // 60,000 milliseconds = 1 minute
}

