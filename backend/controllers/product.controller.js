import Product from '../models/product.model.js'
import mongoose from "mongoose";


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // get All Product From Database
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log(`Error In Fetching Products From Database : ${error.message}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const getProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product's ID" });
    }
    try {
        const product = await Product.findById(id);
        res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.log(`Error : ${error.message}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const addProduct = async (req, res) => {
    const data = req.body; // hint: user will send this data
    // validation 
    if (!data.name || !data.price | !data.image) {
        return res.status(400).json({ success: false, message: "Please Provide all fields" });
    }
    const product = new Product(data); // create collection 
    try {
        await product.save(); // save collection
        res.status(201).json({ success: true, data: product });
    } catch (error) {
        console.log(`Error in create Product: ${error.message}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product's ID" });
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
        console.log(`Error in Delete Product: ${error.message}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product's ID" });
    }
    try {
        const UpdatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
        res.status(200).json({ success: true, data: UpdatedProduct, message: "Product Updated" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};