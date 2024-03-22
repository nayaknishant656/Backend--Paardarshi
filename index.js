import express from 'express';
import { Router } from 'express';
import mongoose from 'mongoose';
import Product from './models/productModels.js';
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})
app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Devtamin')
})
// app.get('/shoes', async (req, res) => {
//     try {
//         const page = parseInt(req.query.page) - 1 || 0;
//         const limit = parseInt(req.query.limit) || 20;
//         const search = req.query.search || "";
//         // let sort = req.query.sort || "rating";
//         // let genre = req.query.genre || "All";

//         // const genreOptions = [
//         //     "Action",
//         //     "Romance",
//         //     "Fantasy",
//         //     "Drama",
//         //     "Crime",
//         //     "Adventure",
//         //     "Thriller",
//         //     "Sci-fi",
//         //     "Music",
//         //     "Family",
//         // ];

//         // genre === "All"
//         //     ? (genre = [...genreOptions])
//         //     : (genre = req.query.genre.split(","));
//         // req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

//         // let sortBy = {};
//         // if (sort[1]) {
//         //     sortBy[sort[0]] = sort[1];
//         // } else {
//         //     sortBy[sort[0]] = "asc";
//         // }
//         // const products = await Product.find({});
//         // res.status(200).json(products);
//         const products = await Product.find({ name: { $regex: search, $options: "i" } })
//             // .where("genre")
//             // .in([...genre])
//             // .sort(sortBy)
//             .skip(page * limit)
//             .limit(limit);

//         const total = await Product.countDocuments({
//             // genre: { $in: [...genre] },
//             name: { $regex: search, $options: "i" },
//         });

//         const response = {
//             error: false,
//             total,
//             page: page + 1,
//             limit,
//             // genres: genreOptions,
//             products,
//         };
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
// app.get('/shoes/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
// app.post('/shoes', async (req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: error.message })
//     }
// })
// // update a product
// app.put('/shoes/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         // we cannot find any product in database
//         if (!product) {
//             return res.status(404).json({ message: `cannot find any product with ID ${id}` })
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

// // delete a product
// app.delete('/shoes/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if (!product) {
//             return res.status(404).json({ message: `cannot find any product with ID ${id}` })
//         }
//         res.status(200).json(product);

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })
// mongoose.set("strictQuery", false)
// mongoose.
//     connect('mongodb://127.0.0.1:27017/Ecommerce')
//     .then(() => {
//         console.log('connected to MongoDB')
//         app.listen(4000, () => {
//             console.log(`Node API app is running on port 4000`)
//         });
//     }).catch((error) => {
//         console.log(error)
//     })