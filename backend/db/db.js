//Se trae al administrador de mongoDb
import mongoose from 'mongoose';

const dbConnection = () =>{
    try {
        //Se intenta conectar con la db
        mongoose.connect(process.env.DB_CONNECTION,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log("Se establecio conexion con mongoDB");
    } catch (error) {
        console.log();
    }
}

export default {dbConnection};