import express, {Request, Response} from 'express'
import { myDataSource } from '../data-soucre';
import { Category } from '../entities/Category.entity';

const router = express();
const categoryRepository = myDataSource.getRepository(Category)

router.get('', async (req: Request, res: Response)=>{
    //SELECT ALL
    const result = await categoryRepository.find();

    console.log('result',result);

    res.json(result)
})

router.post('', async (req: Request, res: Response)=>{
    //SELECT ALL
    const category = categoryRepository.create({
        name: "Laptop",
        description: "Laptop gia re"
    })
    //lưu
    const result = await categoryRepository.save(category)


    res.json(result)
})


export default router