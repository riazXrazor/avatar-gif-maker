const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
var md5 = require('md5');

const port = 8080;

app.set("view engine", "ejs");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(express.static(__dirname + "/assets"));
router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});


router.get("*", function (req, res) {

  var avatar =  md5(req.query.email || 'riazcool77@gmail.com')
  res.render("html",{
    avatar: avatar,
  });
});

app.use("/", router);

app.listen(port, function () {
  console.log("Live at Port http://localhost:" + port);
  // bot.start();
})