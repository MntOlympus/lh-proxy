const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

/********* Middleware *********/
app.use(express.static(path.join(__dirname, 'client')));
app.use(cors());


/********* Routes + Controllers *********/


/********* Start App *********/
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})