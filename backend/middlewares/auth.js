import jwt from "jsonwebtoken";

const auth = async (req, res, next) =>{
    let token = req.header("Authorization");
    const msg = "Authorization denied: ";
    if(!token) return res.status(400).send({message:msg+" No token"});

    token = token.split(" ")[1];
    if(!token) return res.status(400).send({message:msg+" No token"});

    try {
        req.user = jwt.verify(token, process.env.SK_JWT);
        next();
    } catch (error) {
        return res.status(400).send({message:msg+" Invalid token"});
    }

}

export default auth;