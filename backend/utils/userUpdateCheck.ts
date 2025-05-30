import User, { UserInterface } from "../models/user-model";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import NotFoundError from "./NotFoundError";
import { createLoginCookie } from "../cookies/create-cookies";

// interface RequestType extends Request {
//     user?: userAccessType,
//     token?: string,
//     encryptedToken?: string,
// }

type userAccessType = {
  _id: mongoose.Types.ObjectId;
  emailVerified: boolean;
  email: string;
  botChecked: boolean;
};

const userUpdateCheck = async (
  res: Response,
  id: mongoose.Types.ObjectId,
  uuid: string | undefined
) => {
  const updatedUser = await User.findById(id);

  if (!updatedUser) throw new NotFoundError("Cannot find updated user auth");

  if (updatedUser.emailVerified) {
    const { accessToken, refreshToken } = await updatedUser.generateAuthToken(
      uuid
    );
    createLoginCookie(res, accessToken, refreshToken);
  }

  let strippedUser: userAccessType = {
    _id: updatedUser._id,
    emailVerified: updatedUser.emailVerified!,
    email: updatedUser.email,
    botChecked: false,
  };

  return strippedUser;
};

export default userUpdateCheck;
