//Importa el servidor
import express from 'express';
//Permite las reglas de seguridad para el protocolo http y peticiones
import cors from 'cors';
//Trae la conexion
import db from './db/db.js';
//Trae las variables de entorno
import dotenv from 'dotenv';

//Traigo la ruta
import author from './routes/author.js';
import role from './routes/role.js';
import user from './routes/user.js';
import cat from './routes/category.js';
import book from './routes/book.js';

dotenv.config();

const APP = express();
APP.use(express.json());
APP.use(cors());
APP.use("/api/author", author);
APP.use("/api/role", role);
APP.use("/api/user", user);
APP.use("/api/category", cat);
APP.use("/api/book", book);

APP.listen(process.env.PORT, () => {
    console.log("Backend server on the port", process.env.PORT);
});

db.dbConnection();