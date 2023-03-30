const {APP} = require('./src/app.js');
//const {db} = require("./src/db.js")
const port = process.env.PORT || 3010





APP.listen(port, async ()=>{
    //await db.sync({force: true}); 

    //{force en true || false}
    // await conn.sync({force: true}); force en true || false} => Eliminar todas las tablas y volverlas a crear, como esten definidas en el modelo
    // await conn.sync({alter: true}); alter en true || false} => Modifica las tablas ya existentes en base a como esten definidas en el modelo
    // await conn.sync(); 
  console.log(`Listening on localhost:${port}`)

})