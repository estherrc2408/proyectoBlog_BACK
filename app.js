const express = require('express')
const {connection}=require('./helpers/dbConnect')

//vars
var cors = require('cors')
require('dotenv').config()
const app = express()
const port = 3000
app.use(cors())


//*SETEAR CARPETA ESTATICA




//* ESTABLECER TEMPLATE ENGINE
// app.set('view engine' , 'ejs')
// app.set("views",__dirname + "/views");


//* BODY PARSET
//* parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));


//* parse application/json

app.use(express.json());

//*CONEXION

connection()

//* RUTAS

app.use('/api/articles',require('./routers/routerApi'))
// app.use('/api/apiUsers',require('./routers/routerUsers'))
// app.use('/api/apiUsers/films',require('./routers/routerUsersFilms'))

app.listen(port, () => {
    console.log(`servidor a la escucha del puerto ${port}`);
})

