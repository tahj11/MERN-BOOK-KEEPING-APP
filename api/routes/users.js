import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//Check Authentication
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello User, You are Logged In");
});

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET BY ID
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
