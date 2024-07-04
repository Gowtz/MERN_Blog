import { Request, Response } from "express";
import Post from "../Model/posts";
import User from "../Model/user";
import jwt from "jsonwebtoken";

const handlerror = (err) => {
  return err.message;
};
export const getPost = async (req: Request, res: Response) => {
  try {
    const data = await Post.find().limit(10);
    res.status(200).send(data);
  } catch (err) {
    res.send(err);
  }
};

export const addPost = async (req: Request, res: Response) => {
  const { title, desc } = req.body;
  const token = req.cookies.jwt;

  try {
    const user = jwt.verify(
      token,
      process.env.JWT_SECRET,
      async (err, decodedToken) => {
        if (err) {
          console.log(req.headers);
          res.redirect("/not-authenticated");
        } else {
          const data = await User.findOne({ _id: decodedToken.id });
          // console.log(data);
          const post = new Post({ title, desc, author: data._id,authorName:data.name });
          // console.log(id);
          post.save();
          res.status(200).send(post);


        }
      }
    );



  } catch (err) {
    res.send(err);
  }
};
