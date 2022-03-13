import role from "../models/role.js";

//Here u can know if the request come from an admin

const admin = async (req, res, next) => {
  const adminRole = await role.findById(req.user.existingUser);

  if (!adminRole) return res.status(400).send({ message: "Role not found" });

  return adminRole.name === "admin"
    ? next()
    : res.status(500).send({ message: "Unauthorized user" });
};

export default admin;
