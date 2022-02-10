//Importa el servidor
import express from 'express';
//Permite las reglas de seguridad para el protocolo http y peticiones
import cors from 'cors';
//Trae la conexion
import db from './db/db.js';
//Trae las variables de entorno
import dotenv from 'dotenv';

dotenv.config();

const APP = express();
APP.use(express.json());
APP.use(cors());

APP.listen(process.env.PORT, () => {
    console.log("Backend server on the port", process.env.PORT);
});

db.dbConnection();