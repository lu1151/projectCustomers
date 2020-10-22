const http = require("http");
require("./model/connect");
const template = require("art-template");
const path = require("path");
const serveStatic = require("serve-static");
const router = require("./route/index");

const dateformat = require("dateformat");

// serve static
const serve = serveStatic(path.join(__dirname, "public"))

// set template root
template.defaults.root = path.join(__dirname, "views");

// date format
template.defaults.imports.dateformat = dateformat;

// create server
const app = http.createServer();

app.on("request", (req, res) => {
  router(req, res, () => { });
  serve(req, res, () => { })
});

app.listen(80);
