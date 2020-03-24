const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer({});

const PORT = 4000;

/********* Middleware *********/
app.use(express.static(path.join(__dirname, 'client')));
app.use(cors());


/********* Routes + Controllers *********/
app.all('/photos', (req, res) => {
  proxy.web(req, res, {
    target: "http://localhost:3001/"
  });
});

app.all('/recommendations', (req, res) => {
  proxy.web(req, res, {
    target: "http://localhost:3009"
  });
});

app.all('/api/properties', (req, res) => {
  proxy.web(req, res, {
    target: "http://localhost:3000"
  });
});

app.all('/api/listing', (req, res) => {
  proxy.web(req, res, {
    target: "http://localhost:3500"
  });
});

app.all('/api/reviews', (req, res) => {
  proxy.web(req, res, {
    target: "http://localhost:3500"
  });
});

/********* Start App *********/
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
})