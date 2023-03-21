const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require('cors')
require('dotenv').config();

const REACT_APP_UTTU_API_URL = process.env.REACT_APP_UTTU_API_URL
const AUTH_SERVER_URL = process.env.AUTH_SERVER_URL
const PORT = process.env.PORT || 3001;
const app = express();

const corsOptions = {
  origin: '*',
  //credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}


function loadApp(req, res, props) {
  const data = fs.readFileSync(path.resolve("./build/index.html"), "utf8");
  const result = data.replace('<div id="root"','<div id="root" data-react='+ JSON.stringify(props));
  return res.send(result);
}

//app.use(express.static(path.join(__dirname, 'build')));
app.use('/flexible-transport/static/',
  express.static(path.join(__dirname, 'build', 'static'))
);

app.get('_health', function(req, res) {
  res.sendStatus(200);
});

app.all('*', function (req, res) {
    const props = {
      apiUrl: REACT_APP_UTTU_API_URL,
      authServerUrl: AUTH_SERVER_URL,
      mode: "prod"
    }
    return loadApp(req, res, props);
});

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
