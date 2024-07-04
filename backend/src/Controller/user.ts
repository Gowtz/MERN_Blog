import { Request, Response } from "express";
import User from "../Model/user";
import jwt from "jsonwebtoken";

const handlerror = (err: any) => {
  // console.log(err);
  const errors = { err: { email: "", password: "" } };
  if (err.code) {
    errors.err.email = "User Already exist";
  }
  if (err.message === "invalid Password") {
    errors.err.password = "invalid Password";
  }
  if (err.message === "Incorrect Email") {
    errors.err.email = "Incorrect Email";
  }

  if (err.message.includes("User validation failed")) {
    // @ts-ignore
    Object.values(err.errors).forEach(({ properties }) => {
      //@ts-ignore
      errors[properties.path] = properties.message;
      // console.log(properties)
    });
  }
  return errors;
};

const genToken = (id: any) => {
  const max = 60 * 60 * 24 * 3;
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: max,
  });
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // @ts-ignore
    const user = await User.login(email, password);
    // res.send(user)
    const token = genToken(user._id);
    res.cookie("jwt", genToken(user._id), { maxAge: 1000 * 60 * 60 * 24 * 3 }); // three days token
    res.status(200).json( { id: user._id, name: user.name } );
  } catch (error) {
    res.status(400).json(handlerror(error));
  }
};
export const signUp = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const data = await User.create(user);
    const token = genToken(data._id);
    // res.send(token)
    res.cookie("jwt", genToken(data._id), { maxAge: 1000 * 60 * 60 * 24 * 3 }); // three days token
    res.status(200).json({ user: { id: data._id, name: data.name } });
  } catch (error) {
    res.json(handlerror(error));
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("jwt");
  res.json({ msg: "Logged Out" });
};
