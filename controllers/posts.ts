import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { isExportSpecifier } from 'typescript';
import loger from '../middle/log';


interface Post {

    id: Number;
    title: String;
    description: String;
    price:Number;
}


const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://fakestoreapi.com/products`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};


// get by id
const getPost = async ( req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://fakestoreapi.com/products/${id}`);
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};



// create new product
const addPost = async (    req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let description: string = req.body.description;
    let price:string=req.body.price;
    // add the post
    let response: AxiosResponse = await axios.post(`https://fakestoreapi.com/products`, {
        title,
        description,
        price
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};



// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let title: string = req.body.title ?? null;
    let description: string = req.body.description ?? null;
    let price:string=req.body.price  ?? null
     // update the post
    let response: AxiosResponse = await axios.put(`https://fakestoreapi.com/products/${id}`, {
        //...(title && { title }),
        //...(body && { body })
         title,
         description,
         price


    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    let response: AxiosResponse = await axios.delete(`https://fakestoreapi.com/products//${id}`);
    console.log(response)
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

export default{getPosts,getPost,addPost,deletePost,updatePost}