import express from 'express';
import Product from '../../models/product.model';
import Staff from '../../models/staff.model';


const router = express.Router()

router.get ('', async (req, res) =>{

    //1.Tìm tất cả sản phẩm:
//    const result = await Product.find()
//     console.log ('<<=== products ===>>', result)

    const result = await Staff.find();
    
    //2.Tìm một record by _id
    //const result = await Product.findById ('65f3b481063a92232722bbc1');

    //3.Tìm tất cả sản phẩm theo danh mục
    //tương đương là WHERE category = '65f2df7d7cb391a8fb86fbba'
    //const result = await Product.findOne ({
       // category : '65f2df7d7cb391a8fb86fbba'
    //});

    //3.Tìm theo danh mục
    //WHERE price > 500 and stock <0
    // const result = await Product.findOne ({
    //    price: { $gt: 400 },
    //    stock: { $lt: 0}
    // })

    //4.Liệt kê các trường cần lấy
    // const result = await Product.findOne ({
    //     price: { $gt: 400 },
    //     stock: { $eq: 0}
    //  }).select ( '_id productName price discount category');

    // 5.Lấy tất cả ngoài trừ trường _v
    // const result = await Product.find().select('-__v -updatedAt');

    //6.Sắp xếp ORDER BY
    // const result = await Product
    // .find()
    // .select('-__v -updatedAt')
    // .sort('-sort') //ASC, .sort('-sort') ==>DESC
    // ;
    // or
    // const result = await Product
    // .find()
    // .select('-__v -updatedAt')
    // .sort({sort: 1}); //1 ASC,  -1 DESC

    //7.Phân trang
    // const currentPage = req.query.page ? parseInt(req.query.page as string) : 1 ; //trang hiện tại
    // const pageSize = req.query.limit ? parseInt(req.query.limit as string) : 5 ; //số lượng items trên 1 trang
    // const result = await Product
    // .find()
    // .select('-__v -updatedAt')
    // .sort({sort: 1})
    // .skip((currentPage - 1) * pageSize)
    // .limit(pageSize);

    //8.Join các collection
    // const currentPage = req.query.page ? parseInt(req.query.page as string) : 1 ; //trang hiện tại
    // const pageSize = req.query.limit ? parseInt(req.query.limit as string) : 5 ; //số lượng items trên 1 trang
    // const result = await Product
    // .find()
    // .select('-__v -updatedAt')
    // .sort({sort: 1})
    // .skip((currentPage - 1) * pageSize)
    // .limit(pageSize)
    // .populate('category', 'categoryName')
    // .populate('brand')
    // .lean({virtuals: true})
    
    //9.Update by _id
    //UPDATE product SET price = 1300 WHERE _id = ''
    // const result = await Product.findByIdAndUpdate(
    //     '65f3b481063a92232722bbc1',
    //     {
    //         price: 1300
    //     },
    //     {
    //         new: true,
    //     }
    //     )

    //10. Update theo mot truong cu the
    //UPDATE product SET sort = 49 WHERE sort = 50
    // const result = await Product.updateMany(
    //     {
    //         sort: 50
    //     },
    //     {
    //         sort: 49
    //     },
    //     {
    //         new: true,
    //     }
    //     )


    res.json (result)
})

export default router


/*
Mongoose Queries: https://mongoosejs.com/docs/queries.html

Model.deleteMany(): Xóa nhiều
Model.deleteOne(): Xóa một
Model.find() : Tìm kiếm nhiều documents
Model.findById(): Tìm kiếm bởi ID
Model.findByIdAndDelete(): Tìm bởi ID nếu thấy thì Xóa
Model.findByIdAndRemove(): Tìm bởi ID nếu thấy thì Xóa
Model.findByIdAndUpdate(): Tìm bởi ID nếu thấy thì UPdate
Model.findOne(): Tìm một documents
Model.findOneAndDelete(): Tìm một documents và xóa
Model.findOneAndRemove(): Tìm một documents và xóa
Model.findOneAndReplace(): Tìm một documents và thay thế
Model.findOneAndUpdate(): Tìm một documents và update
Model.replaceOne(): Thay thế một document
Model.updateMany(): Update nhiều documents
Model.updateOne(): Update một document
*/

/*
🔶 Tìm kiểu so sánh - Comparison
$eq: Khớp các giá trị = với một giá trị cụ thể.
$gt: Khớp các giá trị > một giá trị cụ thể.
$gte: Khớp các giá trị > = một giá trị cụ thể.
$in: Khớp bất kỳ giá trị nào trong một mảng giá trị đã chỉ định.
$lt: Khớp các giá trị < một giá trị cụ thể.
$lte: Khớp các giá trị < = một giá trị cụ thể.
$ne: Khớp tất cả các giá trị không bằng với một giá trị cụ thể.
$nin: Khớp không có giá trị nào trong một mảng giá trị đã chỉ định.
*/