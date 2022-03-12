import user from "../models/user.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.age)
    return res.status(400).send({ message: "Incomplete data" });

  const schema = new user({
    name: req.body.name.toLowerCase(),
    email: req.body.email,
    password: req.body.password,
    roleId: req.body.roleId,
    dbStatus: true,
    age: req.body.age,
  });

  const result = await schema.save();

  if (!result) return res.status(500).send({ message: "Internal error" });

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          _id: result._id,
          name: result.name,
          age: result.age,
          roleId: result.roleId,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (error) {
    return res.status(500).send({ message: "Error with jwt" });
  }
};

const usersList = async (req, res) => {
  //find(->Expresion regular)
  /**
   * Expresion regular es un codigo predefinido y listo para usar
   * (va a aceptar lo que se ponga aqui)
   */
  // let users = await user.find({name:new RegExp(req.params["name"])}).populate("roleId").exec(); //que se traiga la lista de todos - users es un array
  let users = await user
    .find({
      $and: [{ name: new RegExp(req.params["name"]) }, { dbStatus: "true" }],
    })
    .populate("roleId")
    .exec();

  return users.length === 0
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ users });
};

const usersListByAdmin = async (req, res) => {
  let users = await user
    .find({ name: new RegExp(req.params["name"]) })
    .populate("roleId")
    .exec();

  return users.length === 0
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ users });
};

const login = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send({ message: "Incomplete data" });
  const internalMessage = "The email or password are wrong";

  const existingUser = await user.findOne({ email: req.body.email });

  if (!existingUser) return res.status(400).send({ msg: internalMessage });

  const passwordVerification = await bcrypt.compare(
    req.body.password,
    existingUser.password
  );

  if (!passwordVerification)
    return res.status(400).send({ msg: internalMessage });

  try {
    return res.status(200).json({
      token: jwt.sign(
        {
          id: existingUser._id,
          name: existingUser.name,
          existingUser: existingUser.roleId,
          age: existingUser.age,
          iat: moment().unix(),
        },
        process.env.SK_JWT
      ),
    });
  } catch (error) {
    return res.status(500).send({ msg: "Internal error" });
  }
};

const deletingUser = async (req, res) => {
  if (!req.params["_id"])
    return res.status(400).send({ msg: "Incomplete data" });

  const users = await user.findByIdAndUpdate(req.params["_id"], {
    dbStatus: false,
  });

  return !users
    ? res.status(400).send({ msg: "Error to delete" })
    : res.status(200).send({ msg: "Deleted successfully" });
};

const updatingUser = async (req, res) => {
  if (!req.body._id || !req.body.email || !req.body.name || !req.body.age)
    return res.status(400).send({ msg: "Incomplete data" });

  let pass = "";

  if (!req.body.password) {
    const userDb = await user.findOne({ email: req.body.email });
    pass = userDb.password;
  } else {
    pass = await bcrypt.hash(req.body.password, 10);
  }

  const updating = await user.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    age: req.body.age,
    password: pass,
  });

  return !updating
    ? res.status(400).send({ msg: "Error to update" })
    : res.status(200).send({ msg: "Updated successfully" });
};

export default {
  registerUser,
  usersList,
  login,
  usersListByAdmin,
  deletingUser,
  updatingUser
};
