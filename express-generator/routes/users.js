var express = require('express');
var router = express.Router();

/* GET users listing. */
//users : mặc định
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//khai báo router động sau / của users/... và thêm id
router.get('/:username/:id', function(req, res, next) {
  let p = req.params;
  console.log ("params", p);
  console.log ("query",req.query); //sau dấu ?
  let username = req.params.username ;
  console.log (username);
  res.send(username);
});

//JSON: chủ yêu dùng json để req
router.get('/json', function (req, res, next)  {
  res.json({ name: 'John', age: 30 });
});

//Dùng redirect: Chuyển hướng đến một đường dẫn cụ thể
router.get('/r', function (req, res, next)  {
  res.redirect("/products");
});

//Dowload:
router.get('/dowload', function (req, res, next)  {
  const file = `${__dirname}/../public/file.txt`;
  res.dowload(file); //gửi tập tin đến client
});


module.exports = router;

