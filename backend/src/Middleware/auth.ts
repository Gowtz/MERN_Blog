import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../Model/user";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  console.log(token)
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    async (err: any, decodedToken: any) => {
      if (err) {
        // console.log(token);
        res.locals.user = null;
        res.redirect("/not-authenticated");
      } else {
        const user = await User.findOne({ _id: decodedToken.id });
        // console.log(user);
        
        next();
      }
    }
  );
};

export const getUserId = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  // console.log(token);

jwt.verify(token, process.env.JWT_SECRET, async(err: any, decodedToken: any) => {
    if (err) {
      // console.log(req.headers);
      res.json({error:"Not authorized"})
    } else {
      const user = await User.findOne({ _id: decodedToken.id });
      // @ts-ignore 
      res.json({ id: user._id, name: user.name });
    }
  });
};
