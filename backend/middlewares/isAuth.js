import jwt from "jsonwebtoken";
import { redisClient } from "../index.js";
import { User } from "../models/user.js";

export const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            return res.status(403).json({
                message: "Please Login - no token"
            })
        }

        const decodedData = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedData) {
            return res.status(400).json({
                message: "Token expired"
            })
        }
        const cachedUser = await redisClient.get(`user:$(decodedData.id)`);

        if (cachedUser) {
            req.user = JSON.parse(cachedUser);
            return next();
        }

        const user = await User.findById(decodedData.id).select("-password");
        if (!user) {
            return res.status(400).json({
                message: "No user with this id exist",
            })
        }
        await redisClient.setEx(`user:${user._id}`, 3600, JSON.stringify(user));

        req.user = user;
        next();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}