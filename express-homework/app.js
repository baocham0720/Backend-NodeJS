const express = require('express');
const app = express();
const port = 3000;

// Mảng chứa các sản phẩm (giả sử đã có dữ liệu)
const products = [
  { id: 1, name: 'Áo thun', price: 200000 },
  { id: 2, name: 'Quần jean', price: 500000 },
  { id: 3, name: 'Giày thể thao', price: 800000 }
];

// Route / - Trả về chuỗi “Trang chủ”
app.get('/', (req, res) => {
  res.send('Trang chủ');
});

// Route /about - Trả về chuỗi “Trang giới thiệu”
app.get('/about', (req, res) => {
  res.send('Trang giới thiệu');
});

// Route /products - Trả về mảng các sản phẩm
app.get('/products', (req, res) => {
  res.json(products);
});

// Route /products/:id - Trả về thông tin của sản phẩm có id tương ứng
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Không tìm thấy sản phẩm');
  }
});

// Route /products - Với phương thức POST, trả về chuỗi: "Thêm mới sản phẩm"
app.post('/products', (req, res) => {
  res.send('Thêm mới sản phẩm');
});

// Route /products/:id - Với phương thức PUT, trả về chuỗi: "Chỉnh sửa sản phẩm có ID :id thành công"
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  // Xử lý logic chỉnh sửa sản phẩm
  res.send(`Chỉnh sửa sản phẩm có ID ${productId} thành công`);
});

// Route /products/:id - Với phương thức DELETE, trả về chuỗi: "Xóa sản phẩm có ID :id thành công"
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  // Xử lý logic xóa sản phẩm
  res.send(`Xóa sản phẩm có ID ${productId} thành công`);
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
