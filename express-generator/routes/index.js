var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// /tin-tuc 
router.get('/tin-tuc', function(req, res, next) {
  res.send ("tin tuc");
});

//Để hiện chi tiết về tin tức : dùng biểu thức chính quy
router.get('/tin-tuc/:slug([0-9a-z_-]+)', //dùng :slug để hiẻn thị chi tiết
function(req, res, next) {
  let.slug = req.params.slug;
  res.send ("Tin tức Detail:" + slug);
});

/* GET products. */ //GET là nhận về
router.get('/products', function(req, res, next) {
  console.log ("GET products");
  res.send('GET products');
});

/* POST : trả về giá trị*/ 
router.post('/products', function(req, res, next) {
  console.log ("POST products");
  const data = req.body;
  console.log(data);
  res.send('POST products');
});

/*PUT: cập nhật */
router.put('/products', function(req, res, next) {
  console.log ("PUT products");
  const data = req.body;
  console.log(data);
  res.send('PUT products');
});

/*DELETE: XOÁ */
router.delete('/products', function(req, res, next) {
  console.log ("delete products");
  res.send('delete products');
});

module.exports = router;


/*
res.download():	Tải file.
app.get('/download', (req, res) => {
  const file = `${__dirname}/path/to/your/file.txt`;
  res.download(file); // Gửi tệp tin đến client
});
*/

//res.end():	Kết thúc xử lý reponse

/*
res.json():	Gửi một Json, chủ yếu dùng json để req
app.get('/user', (req, res) => {
  res.json({ name: 'John', age: 30 });
});
*/

//res.jsonp():	Send a JSON response with JSONP support.

/*
res.redirect(): Chuyển hướng request
app.get('/old-page', (req, res) => {
  res.redirect('/new-page');
});
*/

/*
res.render(): Render một giao diện
app.get('/profile', (req, res) => {
  res.render('profile', { username: 'john_doe' });
});
*/

/*
res.send():	Send lại cho lient một tập tin.
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
*/

/*
res.sendFile():	Send a file as an octet stream.
app.get('/myendpoint', (req, res) => {
  res.sendFile(`${__dirname}/test.html`);
});
*/

/*
res.sendStatus():	Set the response status code and send its string representation as the response body.
app.get('/not-found', (req, res) => {
  res.status(404).send('Page not found');
});
*/